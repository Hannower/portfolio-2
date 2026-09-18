import { useState } from "react";
import './Projetos.css';

const ferramentas = ['todos', 'React', 'JavaScript', 'Node.js', 'Express', 'REST API', 'Git', 'PostgreeSQL', 'Firebase'];

const projetosMock = [
    {
        id: 1,
        titulo: 'E-Commerce Dashboard',
        descricao: 'Dashboard completo para gerenciamento de loja virtual com gráficos de vendas, controle...',
        imagem: '/projetos/dashboard.png',
        tags: ['React', 'JavaScript', 'Express', 'REST API'],
        destaque: true,
        demo: '#',
        github: '#',
    },
    {
        id: 2,
        titulo: 'API REST Node.js',
        descricao: 'API completa com autenticação JWT, CRUD de usuários, upload de arquivos e...',
        imagem: '/projetos/api.png',
        tags: ['Node.js', 'Express', 'PostgreSQL'],
        destaque: true,
        demo: '#',
        github: '#',
    },
    {
        id: 3,
        titulo: 'App de Tarefas',
        descricao: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias, prioridades e...',
        imagem: '/projetos/tarefas.png',
        tags: ['React', 'Firebase'],
        destaque: false,
        demo: '#',
        github: '#',
    },
]

export default function Projetos() {
    const [filtro, setFiltro] = useState('todos');

    const projetosFiltrados = filtro === 'todos'
        ? projetosMock
        : projetosMock.filter((p) => p.tags.includes(filtro));

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
                    <div key={p.id} className="projeto-card">
                        <div className="projeto-imagem">
                            {p.destaque && <span className="projeto-destaque">destaque</span>}
                            <img src={p.imagem} alt={p.titulo} />
                        </div>
                        <div className="projeto-info">
                            <h3>{p.titulo}</h3>
                            <p>{p.descricao}</p>
                            <div className="projeto-tags">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="projeto-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="projeto-links">
                                <a href={p.demo} className="link-demo">Ver demo →</a>
                                <a href={p.github} className="link-github">GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
