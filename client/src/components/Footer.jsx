import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const navegacao = ['Início', 'Habilidades', 'Projetos', 'Sobre', 'Contato'];
const stack = ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'REST API'];

export default function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-grid">
        <div className="footer-sobre">
          <span className="footer-logo">&lt;DevPortfolio /&gt;</span>
          <p>
            Desenvolvedor Full-Stack apaixonado por 
            transformar ideias em produtos digitais
            funcionais e bem escritos.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/Hannower" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/hannower-monteiro" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:hannowersousa@gmail.com"><FaEnvelope /></a>
            <a href="https://wa.me/5585985386977" target="_blank" rel="noreferrer"><FaWhatsapp /></a>

          </div>
        </div>

        <div className="footer-coluna">
          <h4>Navegação</h4>
          <ul>
            {navegacao.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-coluna">
          <h4>Stack Principal</h4>
          <ul>
            {stack.map((item) => (
              <li key={item}><span className="footer-bullet">•</span> {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 DevPortfolio — Todos os direitos reservados</span>
      </div>
    </footer>
  );
}