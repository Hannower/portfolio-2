import { useState, useEffect } from "react";
import './Projetos.css';

const ferramentas = ['todos', 'React', 'JavaScript', 'Node.js', 'Express', 'REST API', 'Git', 'PostgreeSQL', 'Firebase'];


export default function Projetos() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/projetos`)
            .then(res => res.json())
            .then(dados => setProjetos(dados));
    }, [])

    const [filtro, setFiltro] = useState('todos');

    const projetosFiltrados = filtro === 'todos'
        ? projetos
        : projetos.filter((p) => p.tecnologias.includes(filtro));

    return (
        <section className="projetos" id="projetos">
            <span className="projetos-tagline">// projetos</span>
            <div className="projetos-header">
                <div className="projetos-title">
                    <h2 >O que eu construí</h2>
                </div>
                <div className="projetos-count">
                    <span >{projetosFiltrados.length} projetos</span>
                </div>
            </div>

            <div className="projetos-filtros">
                {ferramentas.map((f) => (
                    <button
                        key={f}
                        className={`projetos-filtro ${filtro === f ? 'ativo' : ''}`}
                        onClick={() => setFiltro(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="projetos-grid">
                {projetosFiltrados.map((p) => (
                    <div key={p._id} className="projeto-card">
                        <div className="projeto-imagem">
                            {p.destaque && <span className="projeto-destaque">destaque</span>}
                            <img src={p.imagem} alt={p.titulo} />
                        </div>
                        <div className="projeto-info">
                            <h3>{p.titulo}</h3>
                            <p>{p.descricao}</p>
                            <div className="projeto-tags">
                                {p.tecnologias.map((tag) => (
                                    <span key={tag} className="projeto-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="projeto-links">
                                <a href={p.linkDemo} className="link-demo" target="_blank">Ver demo →</a>
                                <a href={p.repositorio} className="link-github" target="_blank">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
