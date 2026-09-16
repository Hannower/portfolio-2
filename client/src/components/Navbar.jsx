import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <nav className={`navbar ${rolou ? 'navbar-rolado' : ''}`}>
      <div className="navbar-logo">&lt;Hannower Monteiro /&gt;</div>

      <ul className={`navbar-menu ${menuAberto ? 'aberto' : ''}`}>
        <li><a href="#" onClick={() => setMenuAberto(false)}>Inicio</a></li>
        <li><a href="#habilidades" onClick={() => setMenuAberto(false)}>Habilidades</a></li>
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
