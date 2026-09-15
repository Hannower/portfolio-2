import './Banner.css';
import foto from'../assets/Profile-azul.PNG';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-image">
        <img src={foto} alt="Foto do desenvolvedor" />
      </div>

      <div className="banner-content">
        <span className="banner-tag">DESENVOLVEDOR FULL-STACK</span>
        <h1>
          Olá, eu sou<br />
          <span className="banner-highlight">Hannower Monteiro</span>
        </h1>
        <p>
            Desenvolvedor Full-Stack apaixonado por criar experiências digitais
            completas, do front-end ao back-end. Trabalho com React, Node.js
            e boas práticas de código, unindo interfaces modernas a APIs
            robustas.
        </p>

        <div className="banner-socials">
          <a href="https://github.com/Hannower" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hannower-monteiro/" target="_blank" rel="noreferrer">
             <FaLinkedin />
          </a>
          <a href="mailto:hannowersousa@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="banner-buttons">
          <a href="#projetos" className="btn-primary">Ver Projetos</a>
          <a href="#contato" className="btn-secondary">Contato</a>
        </div>
      </div>
    </section>
  );
}

