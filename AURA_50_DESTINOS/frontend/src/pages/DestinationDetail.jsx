import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Check, Clock3, Compass, Heart, MapPin, Share2, Sparkles } from 'lucide-react';
import { byId, destinations } from '../data/destinations.js';
import { useTravel } from '../context/TravelContext.jsx';
import { useDestinationPhoto } from '../context/PhotoContext.jsx';

export default function DestinationDetail() {
  const { id } = useParams();
  const destination = byId(id);
  const { favorites, trip, toggleFavorite, toggleTrip, notify } = useTravel();
  const [galleryOpen, setGalleryOpen] = useState(-1);
  const { cover, gallery, loadGallery } = useDestinationPhoto(destination);
  const next = destination ? destinations[(destinations.findIndex((d) => d.id === id) + 1) % destinations.length] : null;
  const { cover: nextPhoto } = useDestinationPhoto(next);
  useEffect(() => { if (destination?.wikiTitle) loadGallery(destination); }, [destination, loadGallery]);
  useEffect(() => { setGalleryOpen(-1); }, [id]);
  if (!destination) return <div className="page-top shell empty-state"><h1>Não encontramos esse destino.</h1><Link className="btn btn-dark" to="/explorar">Voltar aos destinos <ArrowRight size={16}/></Link></div>;

  const liked = favorites.includes(id);
  const planned = trip.includes(id);

  async function share() {
    const link = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: `AURA — ${destination.name}`, url: link });
      else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(link); notify('Link copiado para compartilhar.'); }
      else { notify('Copie o endereço do navegador para compartilhar.'); }
    } catch (error) { if (error.name !== 'AbortError') notify('Não foi possível compartilhar agora.'); }
  }

  return <>
    <section className="detail-hero"><div className="detail-photo" style={{ backgroundImage: `url("${cover.url || destination.hero}"), url("${destination.hero}")` }}/><div className="detail-shade"/><div className="shell detail-hero-inner"><Link className="back-link" to="/explorar"><ArrowLeft size={17}/> TODOS OS DESTINOS</Link><div className="detail-hero-copy"><span className="hero-issue"><span className="mini-sun"/>{destination.region.toUpperCase()} — Nº {destination.number}</span><h1>{destination.name}<span>.</span></h1><p>{destination.tagline}</p></div><div className="detail-hero-footer"><span><MapPin size={16}/>{destination.country.toUpperCase()}</span><span>AURA DESTINATION JOURNAL</span></div></div></section>
    <div className="detail-actions shell"><div className="detail-breadcrumb"><Link to="/">AURA</Link><span>/</span><Link to="/explorar">DESTINOS</Link><span>/</span><strong>{destination.name.toUpperCase()}</strong></div><div className="detail-action-buttons"><button type="button" onClick={() => toggleFavorite(id)} className={`icon-text-button ${liked ? 'is-active' : ''}`} aria-pressed={liked}><Heart size={17} fill={liked ? 'currentColor' : 'none'}/>{liked ? 'Salvo' : 'Favoritar'}</button><button type="button" onClick={share} className="icon-text-button"><Share2 size={17}/> Compartilhar</button></div></div>
    <section className="shell detail-intro section-space"><div className="detail-intro-tag"><span className="eyebrow">UM LUGAR, MIL SENSAÇÕES</span><div className="detail-stamp"><Compass size={55} strokeWidth={.7}/></div></div><div><h2 className="serif-title">{destination.lead}</h2><p className="detail-story">{destination.story}</p><button type="button" className={`btn ${planned ? 'btn-light-active' : 'btn-dark'}`} onClick={() => toggleTrip(id)}>{planned ? <Check size={18}/> : <Sparkles size={18}/>} {planned ? 'Adicionado ao meu roteiro' : 'Adicionar ao meu roteiro'}<ArrowUpRight size={17}/></button></div></section>
    <section className="detail-facts"><div className="shell facts-grid"><div><CalendarDays size={23} strokeWidth={1.3}/><span>MELHOR ÉPOCA</span><strong>{destination.bestSeason}</strong></div><div><Clock3 size={23} strokeWidth={1.3}/><span>TEMPO SUGERIDO</span><strong>{destination.duration}</strong></div><div><Compass size={23} strokeWidth={1.3}/><span>ESPÍRITO DO LUGAR</span><strong>{destination.mood}</strong></div></div></section>
    <section className="gallery-section section-space shell"><div className="section-header"><div><span className="eyebrow">PEQUENOS FRAGMENTOS DO MUNDO</span><h2 className="serif-title">Uma paisagem. <em>Mil olhares.</em></h2></div><p className="gallery-heading-note">Momentos para imaginar a viagem antes mesmo de fazer as malas.</p></div><div className="gallery-grid">{gallery.map((photo, i) => <button type="button" className={`gallery-tile gallery-tile-${i+1}`} key={i} onClick={() => setGalleryOpen(i)} aria-label={`Ampliar fotografia ${i+1} de ${destination.name}`}><img src={photo.url} alt={`Fotografia ${i+1} de ${destination.name}`} loading="lazy" onError={(e) => { if (e.currentTarget.src !== destination.gallery[i]) e.currentTarget.src = destination.gallery[i]; }}/><span><ArrowUpRight size={22}/></span></button>)}</div>{cover.source && <div className="image-attribution">Foto principal: {cover.credit || 'Wikimedia Commons'} · {cover.license || 'Consultar licença'} · <a href={cover.source} target="_blank" rel="noopener noreferrer">Ver créditos e licença ↗</a></div>}</section>
    <section className="quote-section"><div className="shell quote-inner"><span className="quote-symbol">“</span><blockquote>{destination.quote}</blockquote><span className="eyebrow eyebrow-light">AURA / TRAVEL NOTES</span></div></section>
    <section className="shell highlights-section section-space"><div className="two-column-head"><div><span className="eyebrow">EXPERIÊNCIAS QUE FICAM</span><h2 className="serif-title">O que merece <em>seu olhar.</em></h2></div><p>Um ponto de partida para explorar o destino sem abrir mão das descobertas espontâneas.</p></div><div className="highlights-list">{destination.highlights.map((item, i) => <div key={item} className="highlight-row"><span>{String(i+1).padStart(2,'0')}</span><h3>{item}</h3><Sparkles size={22} strokeWidth={1}/></div>)}</div></section>
    <section className="sample-section section-space"><div className="shell"><div className="two-column-head"><div><span className="eyebrow">UM ROTEIRO PARA INSPIRAR</span><h2 className="serif-title">Três dias, <em>muitas histórias.</em></h2></div><p>Uma sugestão editorial, não um itinerário de reservas. Ajuste a viagem ao seu tempo e às condições locais.</p></div><div className="day-grid">{destination.days.map((day,i)=><article className="day-card" key={day.title}><span className="day-index">DIA {String(i+1).padStart(2,'0')}</span><span className="day-circle"><ArrowUpRight size={19}/></span><h3>{day.title}</h3><p>{day.text}</p></article>)}</div><div className="center-cta"><button type="button" onClick={() => toggleTrip(id)} className="btn btn-dark">{planned ? 'Remover do roteiro' : 'Quero incluir no meu roteiro'} <ArrowUpRight size={18}/></button></div></div></section>
    <section className="next-destination" style={{ backgroundImage: `linear-gradient(90deg, rgba(14,32,38,.78),rgba(14,32,38,.12)),url(${nextPhoto.url || next.hero})` }}><div className="shell next-inner"><span className="eyebrow eyebrow-light">A PRÓXIMA PARADA</span><h2>{next.name}</h2><p>{next.tagline}</p><Link to={`/destino/${next.id}`} className="btn btn-ivory">Continuar explorando <ArrowUpRight size={18}/></Link></div></section>
    {galleryOpen >= 0 && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fotografia ampliada" onClick={() => setGalleryOpen(-1)}><button type="button" className="lightbox-close" onClick={() => setGalleryOpen(-1)} aria-label="Fechar fotografia">✕</button><img src={gallery[galleryOpen]?.url || destination.gallery[galleryOpen]} alt={`Fotografia ampliada de ${destination.name}`}/><p>{destination.name} · {galleryOpen+1} / {gallery.length}</p>{gallery[galleryOpen]?.source && <a className="lightbox-attribution" href={gallery[galleryOpen].source} rel="noopener noreferrer" target="_blank">Foto: {gallery[galleryOpen].credit || 'Wikimedia Commons'} · {gallery[galleryOpen].license || 'ver licença'} ↗</a>}</div>}
  </>;
}
