import { useDestinationPhoto } from '../context/PhotoContext.jsx';

export default function DestinationImage({ destination }) {
  const { cover } = useDestinationPhoto(destination);
  return <img src={cover.url || destination.card} alt={`Paisagem de ${destination.name}`} loading="lazy" onError={(e) => { if (e.currentTarget.src !== destination.card) e.currentTarget.src = destination.card; }} />;
}
