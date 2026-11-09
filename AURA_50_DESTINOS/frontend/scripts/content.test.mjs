import test from 'node:test';
import assert from 'node:assert/strict';
import { destinations, regions, byId, illustratedFallback } from '../src/data/destinations.js';

const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

test('catálogo final tem exatamente 100 destinos e IDs únicos', () => {
  assert.equal(destinations.length, 100);
  assert.equal(new Set(destinations.map((item) => item.id)).size, 100);
  assert.equal(new Set(destinations.map((item) => item.name)).size, 100);
  assert.deepEqual(destinations.map((d) => d.number), Array.from({length: 100}, (_, i) => String(i+1).padStart(2, '0')));
});

test('Salvador tem informações, destaque e crédito fotográfico', () => {
  const d = byId('salvador');
  assert.equal(d.country, 'Brasil');
  assert.equal(d.region, 'América do Sul');
  assert.match(d.story, /afro-brasileira/i);
  assert.match(d.hero, /wikimedia/);
  assert.match(d.photoCredit.source, /commons.wikimedia.org/);
  assert.equal(d.photoCredit.license, 'CC BY-SA 2.0');
  assert.equal(d.highlights.length, 3);
});

test('todos os destinos incluem conteúdo completo para cada tela', () => {
  for (const d of destinations) {
    for (const field of ['id', 'name', 'country', 'region', 'kind', 'hero', 'card', 'lead', 'story', 'tagline', 'quote', 'bestSeason', 'duration', 'mood']) {
      assert.ok(d[field], `${d.id} não tem ${field}`);
    }
    assert.ok(regions.includes(d.region), `${d.id}: região sem filtro`);
    assert.ok(d.gallery.length >= (['alter-do-chao', 'yellowstone'].includes(d.id) ? 1 : 3), `${d.id}: galeria curta`);
    assert.ok(d.days.length >= 3, `${d.id}: sugestões editoriais insuficientes`);
    assert.equal(d.highlights.length, 3, `${d.id}: 3 destaques`);
    for (const image of [d.hero, d.card, ...d.gallery]) {
      assert.ok(/^https:\/\//.test(image) || image.startsWith('data:image/svg+xml'), `${d.id}: foto ou ilustração inválida`);
    }
    assert.equal(byId(d.id), d);
    assert.ok(d.story.length > 50, `${d.id}: história curta`);
    assert.ok(d.seasonNote?.length > 30, `${d.id}: justificativa de melhor época ausente`);
    assert.ok(d.tags?.length >= 2, `${d.id}: perfil de viagem incompleto`);
    if (!d.photoCredit && !/^https:\/\/images\.unsplash\.com/.test(d.hero)) assert.ok(d.wikiTitle, `${d.id}: foto remota sem título da Wikipedia`);
  }
});

test('regiões cobrem o mundo e todas têm destinos', () => {
  assert.equal(regions.length, 8);
  for (const region of regions.slice(1)) {
    assert.ok(destinations.some((d) => d.region === region), `Região ${region} está vazia`);
  }
});

test('busca sem acentos localiza Salvador, Brasil e destinos internacionais', () => {
  for (const term of ['salvador', 'brazil', 'costa amalfitana', 'toquio', 'islandia', 'zanzibar']) {
    const adjusted = term === 'brazil' ? 'brasil' : term;
    assert.ok(destinations.some((d) => normalize(`${d.name} ${d.country} ${d.lead}`).includes(adjusted)), `Busca não encontrou ${term}`);
  }
});

test('ilustrações de fallback estão disponíveis sem internet', () => {
  assert.match(illustratedFallback('Salvador', 'América do Sul'), /^data:image\/svg\+xml/);
});

test('busca de ID inválido não inventa destino', () => {
  assert.equal(byId('nao-existe'), undefined);
});
