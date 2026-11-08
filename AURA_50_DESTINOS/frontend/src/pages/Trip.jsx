import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUp, ArrowUpRight, CalendarDays, Compass, Download, Heart, MapPin, MoveRight, NotebookPen, Trash2, X } from 'lucide-react';
import { byId } from '../data/destinations.js';
import { useTravel } from '../context/TravelContext.jsx';
import DestinationImage from '../components/DestinationImage.jsx';

export default function Trip() {
  const { trip, notes, dates, moveTrip, updateNote, updateDate, toggleTrip, clearTrip, notify } = useTravel();
  const [confirmClear, setConfirmClear] = useState(false);
  const places = useMemo(() => trip.map(byId).filter(Boolean), [trip]);

  function downloadTrip() {
    if (!places.length) return;
    const content = ['AURA — MEU ROTEIRO', 'The art of going somewhere', '', ...places.flatMap((d,i) => [
      `${i+1}. ${d.name} — ${d.country}`,
      `Data planejada: ${dates[d.id] ? new Date(`${dates[d.id]}T12:00:00`).toLocaleDateString('pt-BR') : 'A definir'}`,
      `Tempo sugerido: ${d.duration}`,
      `Anotações: ${notes[d.id]?.trim() || 'Nenhuma'}`,
      '',
    ]), 'Criado no AURA. Inspiração editorial, não uma reserva de viagem.'].join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'meu-roteiro-aura.txt';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify('Roteiro exportado como arquivo de texto.');
  }

  return <div className="page-top trip-page">
    <section className="trip-cover"><div className="shell trip-hero-layout"><div><span className="eyebrow eyebrow-light">A JORNADA É SUA / AURA PERSONAL</span><h1>O seu próximo<br/><em>capítulo.</em></h1><p>Organize destinos, escolha uma ordem e anote as pequenas ideias que transformam planos em memórias.</p></div><div className="trip-cover-mark"><Compass size={114} strokeWidth={.6}/><span>MAKE ROOM FOR WONDER</span></div></div></section>
    <div className="shell trip-body"><div className="trip-summary"><div><span className="eyebrow">SEU ROTEIRO, NO SEU RITMO</span><h2 className="serif-title">A viagem começa <em>aqui.</em></h2><p>Seus dados ficam salvos neste navegador. Você pode reorganizar a ordem, definir datas e escrever anotações.</p></div><div className="trip-number"><strong>{String(places.length).padStart(2,'0')}</strong><span>{places.length === 1 ? 'DESTINO NO ROTEIRO' : 'DESTINOS NO ROTEIRO'}</span></div></div>
      {places.length ? <>
        <div className="trip-controls"><span>ARRASTE A IMAGINAÇÃO. REORGANIZE COM AS SETAS.</span><div><button className="text-control" type="button" onClick={downloadTrip}><Download size={17}/> Exportar roteiro</button><button className="text-control danger-control" type="button" onClick={() => setConfirmClear(true)}><Trash2 size={17}/> Limpar roteiro</button></div></div>
        <div className="trip-list">{places.map((d,i) => <article className="trip-item" key={d.id}><div className="trip-item-image"><DestinationImage destination={d} /><span>{String(i+1).padStart(2,'0')}</span></div><div className="trip-item-info"><div className="trip-item-top"><div><span className="micro-label"><MapPin size={12}/> {d.country}</span><h3><Link to={`/destino/${d.id}`}>{d.name}</Link></h3><p>{d.tagline}</p></div><button type="button" className="trip-remove" aria-label={`Remover ${d.name} do roteiro`} onClick={() => toggleTrip(d.id)}><X size={19}/></button></div><div className="trip-fields"><label><span><CalendarDays size={15}/> DATA PLANEJADA</span><input type="date" value={dates[d.id] || ''} onChange={(e) => updateDate(d.id, e.target.value)}/></label><label><span><NotebookPen size={15}/> MINHAS ANOTAÇÕES</span><textarea rows={2} maxLength={500} value={notes[d.id] || ''} onChange={(e) => updateNote(d.id, e.target.value)} placeholder="O que você não quer deixar de conhecer?"/></label></div></div><div className="trip-reorder"><span>ORDEM</span><button type="button" onClick={() => moveTrip(d.id,-1)} disabled={i===0} aria-label={`Mover ${d.name} para cima`}><ArrowUp size={18}/></button><button type="button" onClick={() => moveTrip(d.id,1)} disabled={i===places.length-1} aria-label={`Mover ${d.name} para baixo`}><ArrowDown size={18}/></button></div></article>)}</div>
        <div className="trip-more"><p>O mundo não termina aqui. Continue descobrindo lugares para adicionar à sua história.</p><Link className="underlined-link" to="/explorar">Adicionar mais destinos <ArrowUpRight size={17}/></Link></div>
      </> : <div className="empty-state trip-empty"><Compass size={59} strokeWidth={.8}/><h2>Uma página em branco.<br/><em>Infinitas possibilidades.</em></h2><p>Seu roteiro ainda não tem destinos. Explore nossa curadoria e comece a planejar sua próxima aventura.</p><Link className="btn btn-dark" to="/explorar">Explorar destinos <ArrowUpRight size={18}/></Link></div>}
    </div>
    {confirmClear && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setConfirmClear(false); }}><div className="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="clear-title"><span className="eyebrow">CONFIRMAR AÇÃO</span><h2 id="clear-title">Limpar seu roteiro?</h2><p>Os destinos, as datas e as anotações serão removidos do roteiro. Seus favoritos continuarão salvos.</p><div className="modal-actions"><button type="button" className="btn btn-outline-dark" onClick={() => setConfirmClear(false)}>Cancelar</button><button type="button" className="btn btn-dark" onClick={() => { clearTrip(); setConfirmClear(false); }}>Sim, limpar roteiro</button></div></div></div>}
  </div>;
}
