// Evita que o catálogo de viagens exiba mapas, bandeiras, brasões e outras artes não fotográficas.
const blockedTerms = /(?:^|[\s_.()\-])(?:flag|flags|bandeira|bandera|drapeau|map|maps|mapa|mapas|kart[a-z]*|landkarte|locator|location[\s_.()\-]map|coat[\s_.()\-]*of[\s_.()\-]*arms|bras[aã]o|escudo|emblem|emblema|seal|logo|symbol|símbolo|diagram|diagrama|infographic|infografia|outline|silhouette|blank|administrative|administrativa|political[\s_.()\-]map|satellite[\s_.()\-]map|orthographic|locator[\s_.()\-]*map|elevation[\s_.()\-]*map|locator|wiki[\s_.()\-]*voyage|wikivoyage|route[\s_.()\-]map|rail[\s_.()\-]map|metro[\s_.()\-]map)(?:$|[\s_.()\-])/iu;
const nonPhotoFile = /\.(?:svg|gif|pdf|tif|tiff|webm)$/i;
const photoMime = new Set(['image/jpeg', 'image/webp']);

export function looksLikeLandscapePhoto(title, info) {
  const name = String(title || '').replace(/^File:/i, '').replace(/%20/g, ' ');
  const caption = String(info?.extmetadata?.ImageDescription?.value || '')
    .replace(/<[^>]*>/g, ' ').slice(0, 500);

  if (!name || blockedTerms.test(name) || nonPhotoFile.test(name)) return false;
  if (caption && blockedTerms.test(caption)) return false;
  if (!photoMime.has(info?.mime)) return false;
  const width = Number(info.width) || 0;
  const height = Number(info.height) || 0;
  if (width < 900 || height < 550) return false;
  const ratio = width / height;
  if (ratio < 0.9 || ratio > 3.25) return false;
  return Boolean(info.thumburl || info.url);
}

export function fileNameKey(value) {
  return String(value || '').replace(/^File:/i, '').replace(/_/g, ' ').toLowerCase().trim();
}
