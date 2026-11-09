export const quizQuestions = [
  { id: 'scenario', title: 'Que paisagem faz você querer partir?', detail: 'Pense no lugar onde gostaria de acordar.', options: [
    ['praia', 'Mar azul e praias abertas'], ['montanhas', 'Montanhas, lagos e trilhas'], ['cidade', 'Cidades vibrantes e arquitetura'], ['cultura', 'Templos, história e tradições'] ] },
  { id: 'rhythm', title: 'Qual é o ritmo ideal da viagem?', detail: 'O roteiro deve acompanhar você, e não o contrário.', options: [
    ['descanso', 'Desacelerar e aproveitar'], ['equilibrado', 'Passear com liberdade'], ['aventura', 'Explorar bastante todos os dias'], ['romance', 'Momentos tranquilos a dois ou em boa companhia'] ] },
  { id: 'interest', title: 'O que não pode faltar no caminho?', detail: 'Escolha a experiência que mais te entusiasma.', options: [
    ['gastronomia', 'Mercados, sabores e cafés'], ['historia', 'Museus e patrimônios históricos'], ['natureza', 'Paisagens e vida ao ar livre'], ['arte', 'Arte, design e cena cultural'] ] },
  { id: 'climate', title: 'Em qual clima você se sente melhor?', detail: 'Não existe uma resposta certa.', options: [
    ['quente', 'Calor, sol e roupas leves'], ['ameno', 'Temperaturas moderadas'], ['frio', 'Frio, montanhas e talvez neve'], ['qualquer', 'O lugar importa mais que o clima'] ] },
  { id: 'month', title: 'Em que mês você imagina viajar?', detail: 'Vamos considerar a estação sugerida para cada lugar.', options: [
    ['', 'Ainda não tenho uma data'], ['01', 'Janeiro'], ['02', 'Fevereiro'], ['03', 'Março'], ['04', 'Abril'], ['05', 'Maio'], ['06', 'Junho'], ['07', 'Julho'], ['08', 'Agosto'], ['09', 'Setembro'], ['10', 'Outubro'], ['11', 'Novembro'], ['12', 'Dezembro'] ] },
  { id: 'budget', title: 'Como imagina o orçamento?', detail: 'Uma referência geral para ajudar na escolha, não um preço de viagem.', options: [
    ['1', 'Quero controlar os gastos'], ['2', 'Prefiro um meio-termo'], ['3', 'Posso investir numa experiência especial'], ['0', 'Ainda estou decidindo'] ] },
  { id: 'length', title: 'Quanto tempo gostaria de ficar?', detail: 'Uma viagem pode ter vários ritmos e durações.', options: [
    ['4', 'Até quatro dias'], ['6', 'Cinco a sete dias'], ['10', 'Oito dias ou mais'], ['0', 'Ainda não sei'] ] },
  { id: 'detail', title: 'O que você gostaria de guardar na memória?', detail: 'A última escolha pode revelar bastante sobre a sua próxima viagem.', options: [
    ['romance', 'Um entardecer inesquecível'], ['cultura', 'Uma história que nunca tinha ouvido'], ['aventura', 'Uma descoberta inesperada'], ['descanso', 'A sensação de estar no lugar certo'] ] },
];

const monthNames = ['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const fold = (value) => String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function suggestedMonths(text) {
  const value = fold(text);
  const months = new Set();
  const token = monthNames.join('|');
  const intervals = [...value.matchAll(new RegExp(`\\b(${token})\\s+a\\s+(${token})\\b`, 'g'))];
  for (const [, first, last] of intervals) {
    const from = monthNames.indexOf(first) + 1;
    const to = monthNames.indexOf(last) + 1;
    let current = from;
    do { months.add(current); current = current % 12 + 1; } while (current !== to % 12 + 1);
  }
  for (const [index, name] of monthNames.entries()) if (new RegExp(`\\b${name}\\b`).test(value)) months.add(index + 1);
  return months;
}

export function scoreDestination(destination, answers = {}) {
  const tags = new Set(destination.tags || []);
  let score = 5;
  let matches = [];
  const matchTag = (tag, points, label) => {
    if (tags.has(tag)) { score += points; matches.push(label || tag); return true; }
    return false;
  };
  if (answers.scenario) {
    const scenes = { praia: ['praia','mar','ilhas'], montanhas: ['montanhas','natureza','lagos'], cidade: ['cidade','arte','arquitetura'], cultura: ['cultura','historia'] };
    const expected = scenes[answers.scenario] || [];
    if (expected.some((tag) => matchTag(tag, 7, 'paisagem que você prefere'))) score += 2;
  }
  if (answers.rhythm && answers.rhythm !== 'equilibrado') matchTag(answers.rhythm, 5, 'seu ritmo de viagem');
  if (answers.interest) matchTag(answers.interest, 5, 'seus interesses');
  if (answers.detail) matchTag(answers.detail, 3, 'o que deseja viver');
  if (answers.climate === 'frio') { if (tags.has('frio') || tags.has('montanhas')) score += 6; else if (tags.has('praia')) score -= 2; }
  if (answers.climate === 'quente') { if (tags.has('praia') || tags.has('mar') || tags.has('deserto')) score += 5; else if (tags.has('frio')) score -= 3; }
  if (answers.climate === 'ameno' && !tags.has('deserto') && !tags.has('frio')) score += 2;
  if (answers.month) {
    const valid = suggestedMonths(destination.bestSeason);
    if (valid.size) {
      if (valid.has(Number(answers.month))) { score += 8; matches.push('época sugerida'); }
      else score -= 4;
    }
  }
  const budget = Number(answers.budget);
  if (budget > 0) { const gap = Math.abs((destination.budget || 2) - budget); score += gap === 0 ? 4 : gap === 1 ? 1 : -3; }
  const length = Number(answers.length);
  const numbers = (destination.duration || '').match(/\d+/g)?.map(Number) || [];
  if (length && numbers.length) {
    const min = numbers[0]; const max = numbers[1] || min;
    if (length >= min && length <= max) score += 5;
    else if (length < min) score -= Math.min(6, (min - length) * 2);
    else score += 1;
  }
  return { destination, score, reasons: [...new Set(matches)].slice(0, 3) };
}

export function recommendDestinations(destinations, answers, limit = 3) {
  return destinations.map((destination, index) => ({ ...scoreDestination(destination, answers), index }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit);
}

export function randomDestination(destinations, previousId = '') {
  const choices = destinations.filter((d) => d.id !== previousId);
  if (!choices.length) return destinations[0];
  const number = new Uint32Array(1);
  if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(number);
  else number[0] = Math.floor(Math.random() * 4294967296);
  return choices[number[0] % choices.length];
}
