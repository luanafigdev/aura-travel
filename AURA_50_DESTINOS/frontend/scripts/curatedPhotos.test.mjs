import test from 'node:test';
import assert from 'node:assert/strict';
import { destinations } from '../src/data/destinations.js';
import { curatedPhotoFiles } from '../src/data/curatedPhotos.js';

const filenames = Object.values(curatedPhotoFiles);
test('todos os destinos adicionados têm imagem principal predefinida', () => {
  assert.equal(destinations.length, 100);
  assert.equal(filenames.length, 99);
  for (const destination of destinations.filter((item) => item.id !== 'salvador')) assert.ok(curatedPhotoFiles[destination.id], destination.name);
});
test('evita escolha automática de mapas e bandeiras', () => {
  for (const name of filenames) {
    assert.match(name, /\.jpe?g$/i);
    assert.doesNotMatch(name, /(?:flag|map|mapa|coat.of.arms|emblem|logo|svg)/i);
  }
});
test('nenhuma fotografia é compartilhada entre destinos diferentes', () => {
  assert.equal(new Set(filenames).size, filenames.length);
});
