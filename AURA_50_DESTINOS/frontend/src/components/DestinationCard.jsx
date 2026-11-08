import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart, MapPin } from 'lucide-react';
import { useTravel } from '../context/TravelContext.jsx';
import { useDestinationPhoto } from '../context/PhotoContext.jsx';

export default function DestinationCard({ destination, layout = 'normal', number }) {
  const { favorites, toggleFavorite } = useTravel();
  const liked = favorites.includes(destination.id);
  const { cover } = useDestinationPhoto(destination);
  return <article className={`destination-card card-${layout}`}>
    <div className="destination-image-wrap">
      <Link className="destination-image-link" to={`/destino/${destination.id}`} aria-label={`Conhecer ${destination.name}`}>
        <img src={cover.url || destination.card} alt={`Paisagem de ${destination.name}`} loading="lazy" onError={(e) => { if (e.currentTarget.src !== destination.card) e.currentTarget.src = destination.card; }} />
        <span className="destination-image-gradient" />
      </Link>
      <span className="destination-card-index">{String(number ?? destination.number).padStart(2, '0')}</span>
      <button type="button" className={`favorite-circle ${liked ? 'liked' : ''}`} onClick={() => toggleFavorite(destination.id)} aria-label={liked ? `Remover ${destination.name} dos favoritos` : `Salvar ${destination.name} nos favoritos`} aria-pressed={liked}><Heart size={18} fill={liked ? 'currentColor' : 'none'}/></button>
      <div className="destination-image-caption"><MapPin size={13}/>{destination.country}</div>
    </div>
    <div className="destination-card-bottom">
      <div><span className="micro-label">{destination.kind}</span><h3>{destination.name}</h3></div>
      <Link className="round-arrow" to={`/destino/${destination.id}`} aria-label={`Explorar ${destination.name}`}><ArrowUpRight size={20}/></Link>
    </div>
  </article>;
}
