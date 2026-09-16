import "./Sobre.css";
import foto from "../assets/Profile-azul.PNG";

const infoCards = [
    { icone: '📍', titulo: 'Brasil BR', legenda: 'Localização' },
    { icone: '🎯', titulo: 'Full Stack', legenda: 'Foco' },
    { icone: '💼', titulo: 'CLT ou PJ', legenda: 'Modelo' },
    { icone: '3+', titulo: '', legenda: 'Projetos', destaque: true },
    { icone: '10+', titulo: '', legenda: 'Tecnologias', destaque: true },
];

export default function Sobre() {
    return (
        <section className="sobre">
            <span className="sobre-tagline">// sobre mim</span>
            <h2 className="sobre-title">Quem está por trás do código</h2>

            <div className="sobre-card">
                <div className="sobre-perfil">
                    <img src={foto} alt="Foto do desenvolvedor" />
                    <h3>Seu Nome</h3>
                    <span className="sobre-cargo">Full Stack Dev</span>
                    <span className="sobre-status">
                        <span className="sobre-status-dot"></span> disponível
                    </span>
                </div>

                <p className="sobre-texto">
                    Sou desenvolvedor <strong className="destaque-react">Full-Stack</strong>, com base sólida em{' '}
                    <strong className="destaque-react">React</strong> no front-end e{' '}
                    <strong className="destaque-node">Node.js</strong>/Express no back-end,
                    incluindo integração com bancos de dados relacionais e construção de
                    APIs REST. Gosto de entender o projeto por completo — da interface à
                    lógica do servidor — e aplico boas práticas de código em cada etapa.
                    Estou sempre evoluindo tecnicamente e em busca de projetos e
                    oportunidades onde eu possa contribuir de forma consistente.
                </p>
            </div>

            <div className="sobre-info-grid">
                {infoCards.map((item) => (
                    <div key={item.legenda} className="sobre-info-card">
                        <span className={item.destaque ? 'sobre-info-numero' : 'sobre-info-icone'}>
                            {item.icone}
                        </span>
                        {item.titulo && <strong>{item.titulo}</strong>}
                        <span className="sobre-info-legenda">{item.legenda}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}