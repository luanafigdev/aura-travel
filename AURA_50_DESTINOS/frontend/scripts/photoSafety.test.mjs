import test from 'node:test';
import assert from 'node:assert/strict';
import { looksLikeLandscapePhoto } from '../src/utils/photoSafety.mjs';

const validInfo = { mime: 'image/jpeg', width: 1600, height: 1050, thumburl: 'https://example.org/salvador.jpg' };

test('aceita fotos panorâmicas de destinos', () => {
  assert.equal(looksLikeLandscapePhoto('File:Historic_Centre_of_Salvador.jpg', validInfo), true);
  assert.equal(looksLikeLandscapePhoto('File:Paris Skyline at dusk.jpeg', validInfo), true);
});

test('rejeita mapas e bandeiras mesmo quando a imagem é grande e JPEG', () => {
  for (const filename of [
    'File:Flag_of_Costa_Rica.jpg',
    'File:Map_of_Swiss_Alps.jpg',
    'File:Rio_de_Janeiro_locator_map.jpg',
    'File:Mapas_de_Brasil.jpeg',
    'File:Brasão_of_City.jpeg',
    'File:Coat_of_arms_of_Bora_Bora.jpeg',
    'File:Route_map_of_Paris.jpeg',
    'File:Wikivoyage_Singapore.jpg',
  ]) {
    assert.equal(looksLikeLandscapePhoto(filename, validInfo), false, filename);
  }
});

test('rejeita SVG, PNG e imagens pequenas que podem ser símbolos', () => {
  assert.equal(looksLikeLandscapePhoto('File:Salvador.jpg', { ...validInfo, mime: 'image/svg+xml' }), false);
  assert.equal(looksLikeLandscapePhoto('File:Salvador.png', { ...validInfo, mime: 'image/png' }), false);
  assert.equal(looksLikeLandscapePhoto('File:Salvador.jpg', { ...validInfo, width: 600 }), false);
});

test('rejeita legendas que identificam mapas', () => {
  const info = { ...validInfo, extmetadata: { ImageDescription: { value: '<p>Location map of the destination</p>' } } };
  assert.equal(looksLikeLandscapePhoto('File:Panorama_de_Paris.jpg', info), false);
});
