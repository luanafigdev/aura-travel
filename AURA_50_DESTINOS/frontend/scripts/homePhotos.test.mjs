import test from 'node:test';
import assert from 'node:assert/strict';
import { destinations, byId } from '../src/data/destinations.js';

// A página inicial deve preservar fotos em vez de desenhos de reserva.
test('paisagens editoriais são fotografias reais', () => {
  for (const destination of destinations.slice(0, 6)) {
    assert.match(destination.hero, /^https:\/\//, destination.name);
    assert.doesNotMatch(destination.hero, /data:image\/svg\+xml/, destination.name);
  }
});
test('a abertura usa Costa Amalfitana e a seção do roteiro usa a Patagônia', () => {
  assert.equal(destinations[0].id, 'costa-amalfitana');
  assert.match(destinations[0].hero, /images\.unsplash\.com\/photo-1533105079780-92b9be482077/);
  assert.equal(destinations[5].id, 'patagonia');
  assert.match(destinations[5].hero, /Cuernos_del_Paine_from_Lake_Peho/);
  assert.match(byId('patagonia').photoCredit.source, /commons\.wikimedia\.org/);
});
test('os 100 destinos e Salvador continuam presentes', () => {
  assert.equal(destinations.length, 100);
  assert.equal(byId('salvador').name, 'Salvador');
});
