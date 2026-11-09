import test from 'node:test';
import assert from 'node:assert/strict';
import { additionalGalleryPhotos } from '../src/data/destinationGalleries.mjs';

test('Salvador tem duas imagens adicionais identificadas e com crédito', () => {
  const photos = additionalGalleryPhotos.salvador;
  assert.equal(photos.length, 2);
  for (const photo of photos) {
    assert.match(photo.url, /^https:\/\/thumb\.wikimedia\.org\//);
    assert.match(photo.source, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
    assert.ok(photo.credit && photo.license && photo.label);
    assert.match(photo.label, /Salvador/);
  }
  assert.equal(new Set(photos.map((p) => p.url)).size, photos.length);
});
