import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { curatedPhotoFiles } from '../data/curatedPhotos.js';
import { additionalGalleryPhotos } from '../data/destinationGalleries.mjs';
import { looksLikeLandscapePhoto } from '../utils/photoSafety.mjs';

const PhotoContext = createContext(null);
const COMMONS_API = 'https://commons.wikimedia.org/w/api.php';

function plainText(value) {
  return String(value || '').replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim();
}

function defaultPhoto(destination, url = destination?.hero) {
  return {
    url,
    source: destination?.photoCredit?.source || '',
    credit: destination?.photoCredit?.credit || '',
    license: destination?.photoCredit?.license || '',
  };
}

async function fetchCuratedPhoto(fileName) {
  const url = new URL(COMMONS_API);
  Object.entries({
    action: 'query', format: 'json', formatversion: '2', origin: '*',
    prop: 'imageinfo', titles: `File:${fileName}`,
    iiprop: 'url|size|mime|extmetadata',
    iiextmetadatafilter: 'Artist|LicenseShortName|ImageDescription', iiurlwidth: '1600',
  }).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  const response = await fetch(url);
  if (!response.ok) throw new Error('Imagem indisponível');
  const data = await response.json();
  const file = data.query?.pages?.[0];
  const info = file?.imageinfo?.[0];
  if (!looksLikeLandscapePhoto(file?.title, info)) return null;
  return {
    url: info.thumburl || info.url,
    source: info.descriptionurl || `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName.replace(/ /g, '_'))}`,
    credit: plainText(info.extmetadata?.Artist?.value) || 'Contribuidores do Wikimedia Commons',
    license: plainText(info.extmetadata?.LicenseShortName?.value) || 'Ver licença na página original',
  };
}

export function PhotoProvider({ children }) {
  const [covers, setCovers] = useState({});
  const attempted = useRef(new Set());

  const ensureCover = useCallback(async (destination) => {
    const fileName = curatedPhotoFiles[destination?.id];
    if (!fileName || attempted.current.has(destination.id)) return;
    attempted.current.add(destination.id);
    try {
      const photo = await fetchCuratedPhoto(fileName);
      if (photo) setCovers((current) => ({ ...current, [destination.id]: photo }));
    } catch {
    }
  }, []);
  const loadGallery = useCallback(() => {}, []);
  const value = useMemo(() => ({ covers, ensureCover, loadGallery }), [covers, ensureCover, loadGallery]);
  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function useDestinationPhoto(destination) {
  const ctx = useContext(PhotoContext);
  if (!ctx) throw new Error('useDestinationPhoto precisa de PhotoProvider');
  useEffect(() => { if (destination && curatedPhotoFiles[destination.id]) ctx.ensureCover(destination); }, [destination?.id, ctx.ensureCover]);

  const cover = ctx.covers[destination?.id] || defaultPhoto(destination);
  const gallery = destination ? (additionalGalleryPhotos[destination.id]
    ? [cover, ...additionalGalleryPhotos[destination.id]]
    : curatedPhotoFiles[destination.id]
      ? [cover]
      : [cover]) : [];
  return { cover, gallery, loadGallery: ctx.loadGallery };
}
