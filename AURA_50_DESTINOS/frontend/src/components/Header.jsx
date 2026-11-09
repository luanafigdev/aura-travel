import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Heart, Menu, X } from 'lucide-react';
import { useTravel } from '../context/TravelContext.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { favorites, trip } = useTravel();
  const { pathname } = useLocation();
  const overHero = pathname === '/' || pathname.startsWith('/destino/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const dark = overHero && !scrolled && !menuOpen;

  return <header className={`site-header ${dark ? 'header-over-hero' : 'header-solid'} ${scrolled ? 'header-scrolled' : ''}`}>
    <div className="header-inner shell">
      <Link className="wordmark" to="/" aria-label="AURA — início">AURA<span className="wordmark-dot">.</span></Link>
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
        <NavLink end to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Início</NavLink>
        <NavLink to="/explorar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Destinos</NavLink>
        <NavLink to="/descubra" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Descubra seu destino</NavLink>
        <NavLink to="/colecao" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Minha coleção <span className="nav-counter">{favorites.length}</span></NavLink>
        <Link className="nav-plan" to="/roteiro">Meu roteiro <span>{trip.length}</span><ArrowUpRight size={15} /></Link>
      </nav>
      <div className="header-actions">
        <Link className="header-heart" to="/colecao" aria-label={`Meus favoritos, ${favorites.length} destinos`}><Heart size={19} strokeWidth={1.7}/></Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
    </div>
  </header>;
}
