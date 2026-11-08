import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import DestinationCard from '../components/DestinationCard.jsx';
import { destinations } from '../data/destinations.js';
import { useTravel } from '../context/TravelContext.jsx';

export default function Collection() {
  const { favorites } = useTravel();
  const chosen = favorites.map((id) => destinations.find((d) => d.id === id)).filter(Boolean);
  return <div className="page-top collection-page">
    <section className="shell collection-heading"><div><span className="eyebrow">SEU PEQUENO ATLAS PESSOAL</span><h1 className="page-display">Lugares para <em>guardar.</em></h1><p>Alguns lugares ficam na memória antes mesmo da primeira visita. Salve os que despertam sua curiosidade.</p></div><div className="collection-art"><Heart size={58} strokeWidth={.8}/><span>KEEP THE WONDER</span></div></section>
    <section className="shell collection-list section-space"><div className="results-heading"><span>{String(chosen.length).padStart(2, '0')} {chosen.length === 1 ? 'DESTINO FAVORITO' : 'DESTINOS FAVORITOS'}</span><Link to="/roteiro">IR PARA MEU ROTEIRO <ArrowUpRight size={15}/></Link></div>
      {chosen.length ? <div className="destinations-grid">{chosen.map((d,i) => <DestinationCard destination={d} number={i+1} key={d.id}/>)}</div> : <div className="empty-state"><Heart size={50} strokeWidth={1}/><h2>Sua coleção começa aqui.</h2><p>Encontre os lugares que fazem seus olhos brilhar. Toque no coração de cada destino para guardá-lo.</p><Link to="/explorar" className="btn btn-dark">Descobrir destinos <ArrowUpRight size={17}/></Link></div>}
    </section>
    {chosen.length > 0 && <section className="shell collection-banner"><div><Sparkles size={25}/><span>PRONTO PARA TRANSFORMAR A INSPIRAÇÃO EM ROTEIRO?</span></div><Link to="/roteiro" className="btn btn-ivory">Organizar minha viagem <ArrowUpRight size={17}/></Link></section>}
  </div>;
}
