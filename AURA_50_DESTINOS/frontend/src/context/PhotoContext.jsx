import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { destinations } from '../data/destinations.js';
import { fileNameKey, looksLikeLandscapePhoto } from '../utils/photoSafety.mjs';

const PhotoContext = createContext(null);
const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

function fileSource(filename) {
  if (!filename) return '';
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename.replace(/^File:/i, ''))}`;
}

function plainText(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .trim();
}

function makePhoto(file) {
  const info = file?.imageinfo?.[0];
  if (!looksLikeLandscapePhoto(file?.title, info)) return null;
  return {
    url: info.thumburl || info.url,
    source: info.descriptionurl || fileSource(file.title),
    credit: plainText(info.extmetadata?.Artist?.value) || 'Colaboradores do Wikimedia Commons',
    license: plainText(info.extmetadata?.LicenseShortName?.value) || 'Consultar licença no arquivo original',
  };
}

function defaultPhoto(destination, url = destination?.hero) {
  return {
    url,
    source: destination?.photoCredit?.source || '',
    credit: destination?.photoCredit?.credit || '',
    license: destination?.photoCredit?.license || '',
  };
}

async function wikiRequest(api, params) {
  const url = new URL(api);
  Object.entries({ action: 'query', format: 'json', formatversion: '2', origin: '*', ...params })
    .forEach(([key, value]) => url.searchParams.set(key, String(value)));
  const response = await fetch(url);
  if (!response.ok) throw new Error('Wikimedia temporariamente indisponível');
  return response.json();
}

async function lookupFiles(files, size = 1600) {
  if (!files.length) return [];
  const data = await wikiRequest(COMMONS_API, {
    prop: 'imageinfo',
    titles: files.map((filename) => filename.startsWith('File:') ? filename : `File:${filename}`).join('|'),
    iiprop: 'url|size|mime|extmetadata',
    iiextmetadatafilter: 'Artist|LicenseShortName|ImageDescription',
    iiurlwidth: size,
  });
  return data.query?.pages || [];
}

// Tenta uma fotografia de capa da própria página da Wikipédia, mas valida o arquivo
// antes de exibi-lo. Isso impede que uma bandeira ou mapa apareça por um instante.
async function wikipediaCovers(group) {
  const data = await wikiRequest(WIKIPEDIA_API, {
    redirects: '1',
    prop: 'pageimages',
    piprop: 'thumbnail|name',
    pithumbsize: '1600',
    titles: group.map((destination) => destination.wikiTitle).join('|'),
  });
  const redirects = new Map((data.query?.redirects || [])
    .map(({ from, to }) => [from.toLowerCase(), to.toLowerCase()]));
  const normalized = new Map((data.query?.normalized || [])
    .map(({ from, to }) => [from.toLowerCase(), to.toLowerCase()]));
  const pages = new Map((data.query?.pages || []).map((page) => [page.title?.toLowerCase(), page]));
  const candidates = new Map();

  for (const destination of group) {
    let title = destination.wikiTitle.toLowerCase();
    title = normalized.get(title) || title;
    title = redirects.get(title) || title;
    const filename = pages.get(title)?.pageimage;
    if (filename) candidates.set(destination.id, filename);
  }
  const files = await lookupFiles([...new Set(candidates.values())]);
  const found = new Map(files.map((file) => [fileNameKey(file.title), makePhoto(file)]));
  const photos = {};
  for (const [id, filename] of candidates) {
    const photo = found.get(fileNameKey(filename));
    if (photo) photos[id] = photo;
  }
  return photos;
}

// Se a página principal trouxer apenas um mapa, busca fotografias no Commons.
// A busca nunca é exibida sem a validação de título, tipo e dimensões da imagem.
async function searchPhotos(destination, limit = 4) {
  const queries = [destination.galleryQuery || destination.wikiTitle];
  for (const query of queries) {
    const data = await wikiRequest(COMMONS_API, {
      generator: 'search',
      gsrnamespace: '6',
      gsrlimit: '32',
      gsrsearch: query,
      prop: 'imageinfo',
      iiprop: 'url|size|mime',
      iiurlwidth: '1400',
    });
    const files = (data.query?.pages || []).filter((file) =>
      looksLikeLandscapePhoto(file.title, file.imageinfo?.[0])
    );
    // Resultados mais próximos do nome do destino vêm antes.
    const terms = destination.wikiTitle.toLowerCase().split(/[^\p{L}]+/u).filter((t) => t.length > 3);
    files.sort((a, b) => {
      const score = (file) => terms.filter((word) => file.title.toLowerCase().includes(word)).length;
      return score(b) - score(a);
    });
    if (files.length) {
      const selected = files.slice(0, limit);
      try {
        const details = await lookupFiles(selected.map((file) => file.title), 1400);
        const credited = details.map(makePhoto).filter(Boolean);
        if (credited.length) return credited;
      } catch {
        // Os links para os arquivos originais continuam disponíveis se os créditos falharem.
      }
      return selected.map((file) => ({
        url: file.imageinfo[0].thumburl || file.imageinfo[0].url,
        source: file.imageinfo[0].descriptionurl || fileSource(file.title),
        credit: 'Colaboradores do Wikimedia Commons',
        license: 'Consultar licença no arquivo original',
      }));
    }
  }
  return [];
}

export function PhotoProvider({ children }) {
  const [covers, setCovers] = useState({});
  const [gallery, setGallery] = useState({});
  const requestedGalleries = useRef(new Set());

  useEffect(() => {
    let active = true;
    const pending = destinations.filter((destination) => destination.wikiTitle && !destination.photoCredit);
    const chunks = [];
    for (let i = 0; i < pending.length; i += 12) chunks.push(pending.slice(i, i + 12));

    Promise.allSettled(chunks.map(wikipediaCovers)).then(async (results) => {
      if (!active) return;
      const valid = Object.assign({}, ...results.filter((result) => result.status === 'fulfilled').map((result) => result.value));
      setCovers(valid);
      const missing = pending.filter((destination) => !valid[destination.id]);
      // Limita buscas simultâneas para não sobrecarregar o serviço público.
      for (let i = 0; i < missing.length && active; i += 3) {
        await Promise.allSettled(missing.slice(i, i + 3).map(async (destination) => {
          const photos = await searchPhotos(destination, 1);
          if (active && photos[0]) setCovers((current) => ({ ...current, [destination.id]: photos[0] }));
        }));
      }
    });
    return () => { active = false; };
  }, []);

  const loadGallery = useCallback(async (destination) => {
    if (!destination?.wikiTitle || requestedGalleries.current.has(destination.id)) return;
    requestedGalleries.current.add(destination.id);
    try {
      const photos = await searchPhotos(destination, 5);
      if (photos.length) setGallery((current) => ({ ...current, [destination.id]: photos.slice(0, 4) }));
    } catch {
      requestedGalleries.current.delete(destination.id);
    }
  }, []);

  const value = useMemo(() => ({ covers, gallery, loadGallery }), [covers, gallery, loadGallery]);
  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function useDestinationPhoto(destination) {
  const ctx = useContext(PhotoContext);
  if (!ctx) throw new Error('useDestinationPhoto precisa de PhotoProvider');
  const primary = destination?.photoCredit
    ? defaultPhoto(destination)
    : (ctx.covers[destination?.id] || defaultPhoto(destination));
  let photos = [];
  if (destination) {
    if (destination.wikiTitle) {
      photos = [primary, ...(ctx.gallery[destination.id] || []).filter((photo) => photo.url !== primary.url)].slice(0, 3);
      while (photos.length < 3) photos.push(defaultPhoto(destination, destination.gallery[photos.length] || destination.hero));
    } else {
      photos = destination.gallery.map((url) => defaultPhoto(destination, url));
    }
  }
  return { cover: primary, gallery: photos, loadGallery: ctx.loadGallery };
}
