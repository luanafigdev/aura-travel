import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { curatedPhotoFiles } from '../src/data/curatedPhotos.js';

const destinations = readFileSync(new URL('../src/data/destinations.js', import.meta.url), 'utf8');
const home = readFileSync(new URL('../src/pages/Home.jsx', import.meta.url), 'utf8');

test('os arquivos de Alter do Chão e Yellowstone são identificados', () => {
  assert.equal(curatedPhotoFiles['alter-do-chao'], 'Alter do Chao, Estado do Para, Brazil.jpg');
  assert.equal(curatedPhotoFiles.yellowstone, 'Yellowstone Grand Prismatic.jpg');
});

test('as três fotografias estão referenciadas no catálogo', () => {
  assert.match(destinations, /Panor%C3%A2mica_do_Elevador_Lacerda/);
  assert.match(destinations, /Alter_do_Chao%2C_Estado_do_Para/);
  assert.match(destinations, /Yellowstone_Grand_Prismatic/);
  assert.match(destinations, /correctedPhoto\.url/);
});

test('o crédito de Salvador acompanha a fotografia escolhida', () => {
  assert.match(home, /salvador\.photoCredit\.credit/);
  assert.match(home, /salvador\.photoCredit\.license/);
});
