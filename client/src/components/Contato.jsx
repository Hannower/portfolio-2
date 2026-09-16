import './Contato.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const contatos = [
    { icone: FaEnvelope, label: 'Email', valor: 'hannowersousa@gmail.com', href: 'mailto:hannowersousa@gmail.com' },
    { icone: FaLinkedin, label: 'LinkedIn', valor: '/in/hannower-monteiro/', href: 'https://www.linkedin.com/in/hannower-monteiro/' },
    { icone: FaGithub, label: 'GitHub', valor: '/Hannower', href: 'https://github.com/Hannower' },
    { icone: FaWhatsapp, label: 'WhatsApp', valor: '(85) 985386977', href: 'https://wa.me/5585985386977' },
];

export default function Contato() {
    return (
        <section className="contato">
            <span className="contato-tagline">// contato</span>
            <h2 className="contato-title">Vamos conversar?</h2>
            <p className="contato-texto">
                Disponível para novos projetos e colaborações. Entre em contato e vamos conversar.
            </p>

            <div className="contato-grid">
                {contatos.map(({ icone: Icone, label, valor, href }) => (
                    <a key={label} href={href} className="contato-card" target="_blank" rel="noreferrer">
                        <span className="contato-icone"><Icone /></span>
                        <div>
                            <span className="contato-label">{label}</span>
                            <strong className="contato-valor">{valor}</strong>
                        </div>
                    </a>
                ))}
            </div>

        </section>
    );
}