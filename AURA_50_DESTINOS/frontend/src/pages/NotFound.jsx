import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
export default function NotFound() {
  return <div className="page-top shell empty-state not-found"><Compass size={59} strokeWidth={.8}/><span className="eyebrow">PÁGINA NÃO ENCONTRADA · 404</span><h1>Até se perder pode<br/><em>ser uma aventura.</em></h1><p>Este caminho não está no nosso mapa. Que tal começar uma nova descoberta?</p><Link className="btn btn-dark" to="/">Voltar ao início <ArrowUpRight size={18}/></Link></div>;
}
