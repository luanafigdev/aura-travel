import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, Globe2, Heart, MoveUpRight, Sparkles, Shuffle } from 'lucide-react';
import { randomDestination } from '../utils/quizEngine.mjs';
import { destinations, byId } from '../data/destinations.js';
import DestinationCard from '../components/DestinationCard.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const salvador = byId('salvador');
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const context = gsap.context(() => {
      gsap.fromTo('.hero-animated', { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1.15, stagger: .13, ease: 'power3.out', delay: .18 });
      gsap.to('.hero-backdrop', { yPercent: 13, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, heroRef);
    return () => context.revert();
  }, []);

  const surprise = () => navigate(`/destino/${randomDestination(destinations).id}`);

  return <>
    <section className="home-hero" ref={heroRef} aria-label="Boas-vindas ao AURA">
      <div className="hero-backdrop" style={{ backgroundImage: `url(${destinations[0].hero})` }} />
      <div className="hero-vignette" />
      <div className="hero-fine-line hero-line-one" /><div className="hero-fine-line hero-line-two" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <span className="hero-issue hero-animated"><span className="mini-sun"/> UMA COLEÇÃO DE LUGARES INESQUECÍVEIS <span>— VOL. 01</span></span>
          <h1 className="hero-title hero-animated">Vá onde a<br/><em>alma</em> deseja<span className="hero-title-dot">.</span></h1>
          <p className="hero-summary hero-animated">Entre paisagens extraordinárias e pequenas descobertas, a próxima história pode começar em qualquer lugar.</p>
          <div className="hero-buttons hero-animated">
            <Link className="btn btn-ivory" to="/explorar">Explorar destinos <ArrowUpRight size={18}/></Link>
            <Link className="btn-text light-link" to="/roteiro">Criar meu roteiro <ArrowRight size={17}/></Link>
          </div>
        </div>
        <div className="hero-caption hero-animated"><span className="tiny-line"/> COSTA AMALFITANA, ITÁLIA <span className="caption-coordinate">40°37′ N — 14°29′ E</span></div>
      </div>
      <div className="hero-vertical-word">THE ART OF GOING SOMEWHERE</div>
      <button type="button" className="hero-scroll" onClick={() => document.getElementById('descubra')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Rolar para descobrir"><ArrowDown size={18}/> <span>DESCUBRA</span></button>
      <div className="hero-counter"><span>01</span> / {String(destinations.length).padStart(2, '0')}</div>
    </section>

    <section id="descubra" className="intro-section shell section-space">
      <div className="intro-side"><span className="eyebrow"><span className="eyebrow-line"/> O ESPÍRITO AURA</span><div className="intro-ring"><Globe2 size={45} strokeWidth={.9}/></div></div>
      <div className="intro-main"><h2 className="serif-title">Não é só sobre <em>chegar.</em><br/>É sobre tudo o que você <em>sente</em> pelo caminho.</h2><div className="intro-bottom"><p>O AURA é um pequeno atlas de possibilidades. Uma curadoria de lugares que inspiram novos olhares, histórias e maneiras de estar no mundo.</p><Link className="underlined-link" to="/explorar">Comece sua descoberta <ArrowUpRight size={17}/></Link></div></div>
    </section>

    <section className="destinations-section section-space">
      <div className="shell">
        <div className="section-header"><div><span className="eyebrow">01 / O MUNDO LÁ FORA</span><h2 className="serif-title">Lugares que <em>marcam.</em></h2></div><div className="section-header-side"><p>Uma seleção de experiências únicas, para os que acreditam que viajar é uma forma de sentir mais.</p><Link to="/explorar" className="round-arrow dark-arrow" aria-label="Ver todos os destinos"><ArrowUpRight size={23}/></Link></div></div>
        <div className="featured-grid"><DestinationCard destination={destinations[1]} number={1} layout="tall"/><DestinationCard destination={destinations[2]} number={2}/><DestinationCard destination={destinations[3]} number={3}/></div>
        <div className="section-foot"><span>{destinations.length} DESTINOS · INFINITAS POSSIBILIDADES</span><Link className="underlined-link" to="/explorar">Ver todos os destinos <ArrowUpRight size={17}/></Link></div>
      </div>
    </section>

    <section className="salvador-spotlight" aria-labelledby="salvador-title">
      <div className="salvador-image">
        <img src={salvador.hero} alt="Elevador Lacerda visto do alto, com a Baía de Todos-os-Santos e o Forte de São Marcelo" loading="lazy"/>
        <span className="salvador-photo-label">SALVADOR, BAHIA · BRASIL</span>
      </div>
      <div className="salvador-content">
        <span className="eyebrow">DESTAQUE BRASILEIRO / NOSSO OLHAR</span>
        <div className="salvador-smallline"><span>07 / 100</span><span>12°58′ S — 38°30′ W</span></div>
        <h2 id="salvador-title">Salvador.<br/><em>O mundo começa aqui.</em></h2>
        <p>Azul de mar, casarões coloridos, história viva e uma cultura que se manifesta na música, na arte e em cada encontro. Um capítulo especial do AURA, dedicado à primeira capital do Brasil.</p>
        <Link to="/destino/salvador" className="btn btn-dark">Descobrir Salvador <ArrowUpRight size={18}/></Link>
        <a className="salvador-credit" href={salvador.photoCredit.source} target="_blank" rel="noopener noreferrer">Fotografia: {salvador.photoCredit.credit} · {salvador.photoCredit.license} ↗</a>
      </div>
    </section>

    <section className="discover-teaser section-space shell">
      <div className="discover-teaser-copy"><span className="eyebrow">UM CONVITE À DESCOBERTA</span><h2 className="serif-title">O destino certo pode começar por uma <em>pergunta.</em></h2><p>Um quiz feito para encontrar lugares que combinam com você — ou, se preferir, entregue a próxima viagem ao acaso.</p><div className="discover-teaser-actions"><Link className="btn btn-dark" to="/descubra">Descobrir meu destino <ArrowUpRight size={18}/></Link><button type="button" className="btn btn-outline-dark" onClick={surprise}><Shuffle size={17}/> Deixa a vida me levar</button></div></div><div className="discover-teaser-art"><span>AURA · FIND YOUR PLACE</span><Globe2 size={130} strokeWidth={.55}/><p>O mundo tem um lugar esperando por você.</p></div>
    </section>

    <section className="manifesto-section">
      <div className="manifesto-image" style={{ backgroundImage: `url(${destinations[4].hero})` }}/>
      <div className="manifesto-overlay" />
      <div className="shell manifesto-content"><span className="eyebrow eyebrow-light">UM LEMBRETE GENTIL</span><div className="manifesto-symbol"><Sparkles size={32} strokeWidth={1}/></div><h2>Há um mundo inteiro<br/>esperando pelo seu <em>sim.</em></h2><p>Algumas histórias só começam quando damos o primeiro passo.</p><Link className="btn btn-outline-light" to="/explorar">Deixe a curiosidade guiar <ArrowUpRight size={19}/></Link></div>
      <div className="manifesto-index">AURA / NOTES ON WANDERLUST / 01</div>
    </section>

    <section className="why-section section-space shell"><div className="why-heading"><span className="eyebrow">02 / A JORNADA É SUA</span><h2 className="serif-title">Inspiração para ir.<br/><em>Liberdade para escolher.</em></h2></div><div className="value-grid"><div className="value-card"><span className="value-index">01</span><Compass size={34} strokeWidth={1.15}/><h3>Descubra</h3><p>Explore paisagens, culturas e experiências que despertam a vontade de conhecer o mundo.</p></div><div className="value-card"><span className="value-index">02</span><Heart size={34} strokeWidth={1.15}/><h3>Guarde</h3><p>Salve seus destinos favoritos e monte uma coleção de lugares que fazem seus olhos brilhar.</p></div><div className="value-card"><span className="value-index">03</span><MoveUpRight size={34} strokeWidth={1.15}/><h3>Imagine</h3><p>Monte um roteiro do seu jeito, organize a ordem, escolha datas e anote suas ideias.</p></div></div></section>

    <section className="journal-section shell section-space"><div className="journal-visual"><img src={destinations[5].hero} alt="Paisagem de montanhas no horizonte" loading="lazy"/><div className="journal-label">POSTCARD Nº 006 <span>WISH YOU WERE HERE</span></div></div><div className="journal-copy"><span className="eyebrow">03 / SEU PRÓXIMO CAPÍTULO</span><h2 className="serif-title">Seu mundo.<br/>Suas rotas.<br/><em>Sua história.</em></h2><p>Guarde suas descobertas em uma coleção pessoal e transforme lugares favoritos em um roteiro que tem tudo a ver com você. Sem cadastro, sem complicação.</p><Link className="btn btn-dark" to="/roteiro">Criar meu roteiro <ArrowUpRight size={18}/></Link><span className="journal-small">SUAS ESCOLHAS FICAM SALVAS NESTE NAVEGADOR.</span></div></section>
    <section id="por-que-aura" className="aura-meaning"><div className="shell aura-meaning-inner"><span className="eyebrow eyebrow-light">A HISTÓRIA POR TRÁS DO NOME</span><h2>Por que <em>AURA?</em></h2><p className="aura-meaning-intro">Porque cada lugar tem uma essência que não cabe em uma fotografia.</p><div className="aura-letters">{[['A','Aventuras'],['U','Únicas'],['R','Recordações'],['A','Atemporais']].map(([letter, word]) => <div className="aura-letter" key={word}><strong>{letter}</strong><span>{word}</span></div>)}</div><blockquote>“Porque nem tudo que passa pela nossa vida vai embora.”</blockquote><p className="aura-meaning-signature">THE ART OF GOING SOMEWHERE</p></div></section>
  </>;
}
