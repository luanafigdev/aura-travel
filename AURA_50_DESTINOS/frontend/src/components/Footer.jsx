import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-top">
      <div>
        <p className="eyebrow eyebrow-light">UM CONVITE PARA IR ALÉM</p>
        <h2>O mundo está<br/><em>te esperando.</em></h2>
        <Link className="footer-link" to="/explorar">Encontrar meu próximo destino <ArrowUpRight size={21}/></Link>
      </div>
      <div className="footer-compass"><Compass size={88} strokeWidth={0.7} /><span>FOLLOW YOUR WONDER</span></div>
    </div>
    <div className="shell footer-contact" aria-label="Contato de desenvolvimento web">
      <div className="footer-contact-copy">
        <span className="eyebrow eyebrow-light">UM PROJETO POR LUANA FIGUEIREDO</span>
        <h3>Gostou desta experiência?<br/><em>Vamos criar a sua.</em></h3>
        <p>Sites e experiências digitais com identidade, cuidado e personalidade.</p>
      </div>
      <a className="footer-contact-action" href="mailto:luanafigueiredo.dev@gmail.com?subject=Quero%20conversar%20sobre%20um%20projeto" aria-label="Enviar e-mail para Luana Figueiredo">
        <Mail size={18} aria-hidden="true"/>
        <span>luanafigueiredo.dev@gmail.com</span>
        <ArrowUpRight size={18} aria-hidden="true"/>
      </a>
    </div>
    <div className="shell footer-bottom">
      <Link className="wordmark footer-logo" to="/">AURA<span className="wordmark-dot">.</span></Link>
      <p>Uma experiência de inspiração para viajar. Feita para explorar, não para reservar.</p>
      <div className="footer-links"><Link to="/explorar">Destinos</Link><Link to="/descubra">Quiz</Link><Link to="/colecao">Favoritos</Link><Link to="/roteiro">Roteiro</Link><button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo"><ArrowUp size={17}/></button></div>
    </div>
    <div className="shell copyright"><span>© {new Date().getFullYear()} AURA — The art of going somewhere.</span><span>Um projeto conceitual de front-end.</span></div>
  </footer>;
}
