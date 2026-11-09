import test from 'node:test';
import assert from 'node:assert/strict';
import { destinations } from '../src/data/destinations.js';
import { destinationLinks } from '../src/utils/locationLinks.mjs';
import { quizQuestions, randomDestination, recommendDestinations, suggestedMonths } from '../src/utils/quizEngine.mjs';

test('quiz tem perguntas diferentes e respostas válidas', () => {
  assert.equal(quizQuestions.length, 8);
  assert.equal(new Set(quizQuestions.map((q) => q.id)).size, 8);
  for (const q of quizQuestions) assert.ok(q.options.length >= 4);
});

test('mês sugerido respeita faixas que atravessam dezembro', () => {
  const months = suggestedMonths('Novembro a março');
  assert.deepEqual([...months].sort((a,b) => a-b), [1,2,3,11,12]);
  assert.deepEqual([...suggestedMonths('Maio a junho e setembro a outubro')].sort((a,b)=>a-b), [5,6,9,10]);
});

test('recomendações usam os 100 destinos e respondem às escolhas', () => {
  const answers = {scenario:'praia', rhythm:'descanso', interest:'natureza', climate:'quente', month:'09', budget:'2', length:'6', detail:'descanso'};
  const a = recommendDestinations(destinations, answers);
  assert.equal(a.length, 3);
  assert.equal(new Set(a.map(x=>x.destination.id)).size, 3);
  assert.ok(a[0].score >= a[1].score);
  const b = recommendDestinations(destinations, {...answers,scenario:'cultura',interest:'historia',rhythm:'equilibrado',climate:'ameno'});
  assert.ok(a[0].destination.id !== b[0].destination.id || a[0].score !== b[0].score);
});

test('sorteio sempre pertence ao catálogo e evita repetir o anterior', () => {
  for (let i=0;i<40;i++) {
    const first = randomDestination(destinations);
    const next = randomDestination(destinations, first.id);
    assert.ok(destinations.includes(first));
    assert.notEqual(next.id, first.id);
  }
});

test('destinos têm links válidos para explorar com serviços externos', () => {
  for (const d of destinations) {
    const links = destinationLinks(d);
    assert.match(links.maps, /^https:\/\/www\.google\.com\/maps\/search\//);
    assert.match(links.earth, /^https:\/\/earth\.google\.com\/web\/search\//);
    assert.match(links.street, /^https:\/\/www\.google\.com\/maps\//);
  }
});
