import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { destinations } from '../data/destinations.js';

const PhotoContext = createContext(null);
const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

function fileSource(filename) {
  if (!filename) return '';
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename.replace(/^File:/, ''))}`;
}

function plainText(value) {
  return String(value || '').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim();
}

function photoFromImageInfo(file) {
  const info = file.imageinfo?.[0];
  if (!info?.thumburl && !info?.url) return null;
  if (!info.mime?.startsWith('image/') || info.mime === 'image/svg+xml') return null;
  if ((info.width || 0) < 850 || (info.height || 0) < 540) return null;
  if (/map|flag|logo|coat.of.arms|locator|emblem|diagram|icon|seal/i.test(file.title || '')) return null;
  return {
    url: info.thumburl || info.url,
    source: info.descriptionurl || fileSource(file.title),
    credit: plainText(info.extmetadata?.Artist?.value) || 'Colaboradores do Wikimedia Commons',
    license: plainText(info.extmetadata?.LicenseShortName?.value) || 'Consultar licença',
  };
}

const defaultPhoto = (destination, url = destination?.hero) => ({
  url,
  source: destination?.photoCredit?.source || '',
  credit: destination?.photoCredit?.credit || '',
  license: destination?.photoCredit?.license || '',
});

// As fotos da Wikipedia são carregadas em lotes pequenos, sem chave e sem back-end.
// Se a fonte externa estiver indisponível, a arte vetorial do próprio projeto continua visível.
export function PhotoProvider({ children }) {
  const [covers, setCovers] = useState({});
  const [gallery, setGallery] = useState({});
  const requestedGalleries = useRef(new Set());

  useEffect(() => {
    let active = true;
    const pending = destinations.filter((d) => d.wikiTitle && !d.photoCredit);
    const chunks = [];
    for (let i = 0; i < pending.length; i += 22) chunks.push(pending.slice(i, i + 22));

    Promise.allSettled(chunks.map(async (group) => {
      const params = new URLSearchParams({
        action: 'query', format: 'json', formatversion: '2', origin: '*', redirects: '1',
        prop: 'pageimages', piprop: 'thumbnail|name', pithumbsize: '1600',
        titles: group.map((d) => d.wikiTitle).join('|'),
      });
      const response = await fetch(`${WIKIPEDIA_API}?${params}`);
      if (!response.ok) throw new Error('Serviço de fotos indisponível');
      const data = await response.json();
      const redirects = new Map((data.query?.redirects || []).map(({ from, to }) => [from.toLowerCase(), to.toLowerCase()]));
      const normalized = new Map((data.query?.normalized || []).map(({ from, to }) => [from.toLowerCase(), to.toLowerCase()]));
      const pages = new Map((data.query?.pages || []).map((p) => [p.title?.toLowerCase(), p]));
      const result = {};
      const imageFiles = new Map();
      group.forEach((d) => {
        let title = d.wikiTitle.toLowerCase();
        title = normalized.get(title) || title;
        title = redirects.get(title) || title;
        const page = pages.get(title);
        if (page?.thumbnail?.source) {
          result[d.id] = {
            url: page.thumbnail.source,
            source: fileSource(page.pageimage),
            credit: 'Wikimedia Commons',
            license: 'Ver atribuição e licença no arquivo original',
          };
          if (page.pageimage) imageFiles.set(page.pageimage.toLowerCase(), d.id);
        }
      });

      // Obtém os créditos reais das imagens, sempre que a origem for Wikimedia Commons.
      if (imageFiles.size) {
        try {
          const creditsQuery = new URLSearchParams({
            action: 'query', format: 'json', formatversion: '2', origin: '*',
            prop: 'imageinfo', iiprop: 'url|extmetadata',
            titles: [...imageFiles.keys()].map((name) => `File:${name}`).join('|'),
          });
          const creditsResponse = await fetch(`${COMMONS_API}?${creditsQuery}`);
          if (creditsResponse.ok) {
            const credits = await creditsResponse.json();
            for (const page of credits.query?.pages || []) {
              const id = imageFiles.get(page.title?.replace(/^File:/, '').toLowerCase());
              const details = page.imageinfo?.[0];
              if (id && details) {
                result[id] = {
                  ...result[id],
                  source: details.descriptionurl || result[id].source,
                  credit: plainText(details.extmetadata?.Artist?.value) || result[id].credit,
                  license: plainText(details.extmetadata?.LicenseShortName?.value) || result[id].license,
                };
              }
            }
          }
        } catch { /* A imagem segue visível, com um link para consultar os créditos. */ }
      }
      return result;
    })).then((results) => {
      if (!active) return;
      const loaded = Object.assign({}, ...results.filter((r) => r.status === 'fulfilled').map((r) => r.value));
      setCovers(loaded);
    });
    return () => { active = false; };
  }, []);

  const loadGallery = useCallback(async (destination) => {
    if (!destination?.wikiTitle || requestedGalleries.current.has(destination.id)) return;
    requestedGalleries.current.add(destination.id);
    const params = new URLSearchParams({
      action: 'query', format: 'json', formatversion: '2', origin: '*',
      generator: 'search', gsrnamespace: '6', gsrlimit: '18',
      gsrsearch: destination.galleryQuery || destination.wikiTitle,
      prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '1400',
    });
    try {
      const response = await fetch(`${COMMONS_API}?${params}`);
      if (!response.ok) return;
      const data = await response.json();
      const photos = (data.query?.pages || []).map(photoFromImageInfo).filter(Boolean);
      if (photos.length) setGallery((current) => ({ ...current, [destination.id]: photos.slice(0, 4) }));
    } catch { /* O conteúdo local permanece acessível mesmo se a Wikimedia estiver offline. */ }
  }, []);

  const value = useMemo(() => ({ covers, gallery, loadGallery }), [covers, gallery, loadGallery]);
  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function useDestinationPhoto(destination) {
  const ctx = useContext(PhotoContext);
  if (!ctx) throw new Error('useDestinationPhoto precisa de PhotoProvider');
  const primary = destination?.photoCredit ? defaultPhoto(destination) : (ctx.covers[destination?.id] || defaultPhoto(destination));
  let photos = [];
  if (destination) {
    if (destination.wikiTitle) {
      photos = [primary, ...(ctx.gallery[destination.id] || []).filter((p) => p.url !== primary.url)].slice(0, 3);
      while (photos.length < 3) photos.push(defaultPhoto(destination, destination.gallery[photos.length] || destination.hero));
    } else {
      photos = destination.gallery.map((url) => defaultPhoto(destination, url));
    }
  }
  return { cover: primary, gallery: photos, loadGallery: ctx.loadGallery };
}
