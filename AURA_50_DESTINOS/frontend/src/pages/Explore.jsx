import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpRight, X, Compass, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard.jsx';
import { destinations, regions } from '../data/destinations.js';

const fold = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function Explore() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('Todos');
  const [sort, setSort] = useState('curadoria');
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => setVisibleCount(12), [query, region, sort]);

  const matches = useMemo(() => {
    const term = fold(query.trim());
    const list = destinations.filter((d) => (region === 'Todos' || d.region === region) && (!term || fold([d.name, d.country, d.region, d.kind, d.tagline, d.lead].join(' ')).includes(term)));
    if (sort === 'alfabetica') list.sort((a,b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (sort === 'pais') list.sort((a,b) => a.country.localeCompare(b.country, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'));
    return list;
  }, [query, region, sort]);

  return <div className="page-top explore-page">
    <section className="shell explore-intro"><div><span className="eyebrow">O MUNDO EM PERSPECTIVA / 01 — {String(destinations.length).padStart(2, "0")}</span><h1 className="page-display">Para onde vamos <em>agora?</em></h1></div><div className="explore-intro-right"><p>Uma coleção de destinos para despertar a curiosidade. Encontre o lugar que combina com o seu próximo capítulo.</p><span className="small-round"><Compass size={25} strokeWidth={1}/></span></div></section>
    <section className="shell filters-bar" aria-label="Filtrar destinos"><div className="search-box"><Search size={18}/><label htmlFor="search-destination" className="sr-only">Buscar destino</label><input id="search-destination" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Busque por lugar, país ou experiência..."/>{query && <button type="button" onClick={() => setQuery('')} aria-label="Limpar busca"><X size={17}/></button>}</div><div className="filter-chips" role="group" aria-label="Região">{regions.map((value) => <button key={value} type="button" className={`filter-chip ${region === value ? 'selected' : ''}`} aria-pressed={region === value} onClick={() => setRegion(value)}>{value}</button>)}</div><div className="sort-box"><SlidersHorizontal size={16}/><label htmlFor="sort-destinations" className="sr-only">Ordenar destinos</label><select id="sort-destinations" value={sort} onChange={(e) => setSort(e.target.value)}><option value="curadoria">Nossa curadoria</option><option value="alfabetica">Nome A–Z</option><option value="pais">País A–Z</option></select></div></section>
    <section className="shell explore-results"><div className="results-heading"><span>{String(matches.length).padStart(2,'0')} {matches.length === 1 ? 'DESTINO ENCONTRADO' : 'DESTINOS ENCONTRADOS'}</span><span>EXPLORE NO SEU RITMO</span></div>{matches.length ? <div className="destinations-grid">{matches.slice(0, visibleCount).map((d,i) => <DestinationCard key={d.id} destination={d} number={i+1}/>)}</div> : <div className="empty-state"><Compass size={47} strokeWidth={1}/><h2>Nenhum destino por aqui.</h2><p>Experimente outro termo ou região. O mundo ainda tem muito para mostrar.</p><button className="btn btn-dark" type="button" onClick={() => {setQuery(''); setRegion('Todos');}}>Limpar filtros <ArrowUpRight size={17}/></button></div>}
      {matches.length > visibleCount && <div className="more-destinations"><span>EXIBINDO {visibleCount} DE {matches.length} DESTINOS</span><button type="button" className="btn btn-dark" onClick={() => setVisibleCount((n) => n + 12)}>Descobrir mais lugares <ChevronDown size={19}/></button></div>}
    </section>
    <div className="shell explore-end"><span>ATÉ A PRÓXIMA DESCOBERTA</span><Link className="underlined-link" to="/roteiro">Criar meu roteiro <ArrowUpRight size={17}/></Link></div>
  </div>;
}
