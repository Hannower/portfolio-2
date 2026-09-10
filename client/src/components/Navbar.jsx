import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);  

  return (
    <nav className="navbar">
      <div className="navbar-logo">&lt;Hannower Monteiro /&gt;</div>

      <ul className={`navbar-menu ${menuAberto ? 'aberto' : ''}`}>
        <li><a href="#projetos" onClick={() => setMenuAberto(false)}>Projetos</a></li>
        <li><a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a></li>
        <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
      </ul>

      <button
        className={`navbar-hamburguer ${menuAberto ? 'aberto' : ''}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
