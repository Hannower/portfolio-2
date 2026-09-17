import './Banner.css';
import heroImg from '../assets/hero-portfolio.PNG';
import { FaDownload } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="banner" id='banner'>
      <div className="banner-content">
        <span className="banner-tag">
          DESENVOLVEDOR WEB <span className="banner-tag-linha"></span>
        </span>
        <h1>
          Olá, eu sou<br />
          <span className="banner-highlight">Hannower Monteiro</span>
        </h1>
        <p>
          Desenvolvedor Full-Stack apaixonado por criar experiências digitais
          completas, do front-end ao back-end. Trabalho com React, Node.js, Express
          e boas práticas de código, unindo interfaces modernas a APIs
          robustas.
        </p>

        <div className="banner-buttons">
          <a href="#projetos" className="btn-primary">Ver Projetos →</a>
          <a href="#contato" className="btn-secondary">Contato</a>
        </div>
      </div>

      <div className="banner-image">
        <img src={heroImg} alt="Ilustração de código React" />
      </div>
    </section>
  );
}