import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Compass, RotateCcw, Shuffle, Sparkles } from 'lucide-react';
import { destinations } from '../data/destinations.js';
import { quizQuestions, randomDestination, recommendDestinations } from '../utils/quizEngine.mjs';
import DestinationCard from '../components/DestinationCard.jsx';

export default function Discover() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);
  const [lastSurprise, setLastSurprise] = useState('');
  const current = quizQuestions[step];
  const results = useMemo(() => complete ? recommendDestinations(destinations, answers) : [], [complete, answers]);

  function surprise() {
    const chosen = randomDestination(destinations, lastSurprise);
    setLastSurprise(chosen.id);
    navigate(`/destino/${chosen.id}`);
  }
  function restart() { setAnswers({}); setStep(0); setComplete(false); }
  function next() {
    if (!Object.hasOwn(answers, current.id)) return;
    if (step === quizQuestions.length - 1) { setComplete(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else setStep((value) => value + 1);
  }
  return <div className="discover-page page-top">
    <section className="discover-top">
      <div className="shell discover-top-inner">
        <span className="eyebrow eyebrow-light">AURA · FIND YOUR SOMEWHERE</span>
        <h1>Onde sua próxima <em>história</em> começa?</h1>
        <p>Responda a algumas perguntas sobre o que te inspira. Nós encontramos lugares que combinam com seu jeito de viajar.</p>
        <div className="discover-top-links"><a href="#quiz" className="btn btn-ivory">Descobrir meu destino <ArrowUpRight size={18}/></a><button type="button" className="discover-random-link" onClick={surprise}><Shuffle size={18}/> Deixa a vida me levar</button></div>
      </div>
    </section>
    <section id="quiz" className="shell discover-workspace section-space">
      {!complete ? <div className="quiz-panel">
        <div className="quiz-meta"><span className="eyebrow">SUA BÚSSOLA PESSOAL</span><span>{String(step + 1).padStart(2, '0')} / {String(quizQuestions.length).padStart(2, '0')}</span></div>
        <div className="quiz-progress" aria-label={`Etapa ${step + 1} de ${quizQuestions.length}`}><span style={{ width: `${(step + 1) * 100 / quizQuestions.length}%` }}/></div>
        <h2>{current.title}</h2><p className="quiz-hint">{current.detail}</p>
        <div className={`quiz-options ${current.id === 'month' ? 'quiz-options-month' : ''}`} role="group" aria-label={current.title}>
          {current.options.map(([value, label]) => <button key={`${current.id}-${value}`} type="button" className={`quiz-option ${answers[current.id] === value ? 'selected' : ''}`} aria-pressed={answers[current.id] === value} onClick={() => setAnswers((prev) => ({ ...prev, [current.id]: value }))}><span className="quiz-option-marker">{answers[current.id] === value ? '✦' : '○'}</span>{label}</button>)}
        </div>
        <div className="quiz-navigation"><button className="quiz-back" type="button" disabled={!step} onClick={() => setStep((value) => value - 1)}><ArrowLeft size={17}/> Voltar</button><button className="btn btn-dark" type="button" disabled={!Object.hasOwn(answers, current.id)} onClick={next}>{step === quizQuestions.length - 1 ? 'Ver meu destino' : 'Continuar'} <ArrowRight size={18}/></button></div>
      </div> : <div className="quiz-results"><span className="eyebrow">SEU MUNDO, SUA HISTÓRIA</span><h2 className="serif-title">Três lugares com <em>a sua cara.</em></h2><p>Selecionamos destinos que se aproximam das suas preferências de paisagem, interesses, época e ritmo. É uma inspiração editorial, não uma previsão ou recomendação de reservas.</p><div className="quiz-result-grid">{results.map(({ destination, reasons }, index) => <div key={destination.id} className="quiz-result"><div className="quiz-result-label">{index === 0 ? 'SUA MELHOR COMBINAÇÃO' : `OUTRA POSSIBILIDADE 0${index + 1}`}</div><DestinationCard destination={destination}/><p>{reasons.length ? `Tem a ver com: ${reasons.join(', ')}.` : `Vale conhecer ${destination.name} e descobrir o que torna este lugar especial.`}</p><span className="quiz-result-season">Melhor época sugerida: {destination.bestSeason}</span></div>)}</div><div className="quiz-result-actions"><button type="button" onClick={restart} className="btn btn-outline-dark"><RotateCcw size={17}/> Refazer o quiz</button><Link to="/explorar" className="btn btn-dark">Ver os 100 destinos <ArrowUpRight size={18}/></Link></div></div>}
    </section>
    <section className="discover-surprise shell"><div className="discover-surprise-icon"><Compass size={42} strokeWidth={1}/></div><div><span className="eyebrow">PARA QUEM GOSTA DE SURPRESAS</span><h2>Deixa a vida <em>me levar.</em></h2><p>Sem perguntas, sem filtros. Um destino escolhido pela sorte, entre os 100 lugares do AURA.</p></div><button className="btn btn-dark" type="button" onClick={surprise}><Shuffle size={17}/> Surpreenda-me</button></section>
  </div>;
}
