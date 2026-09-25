import { useState, useEffect } from "react";
import GaleriaModal from './GaleriaModal.jsx';
import './Projetos.css';

export default function Projetos() {
    const [projetos, setProjetos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);
    const [filtro, setFiltro] = useState('todos');
    const [projetoAberto, setProjetoAberto] = useState(null);

    const buscarProjetos = () => {
        setCarregando(true);
        setErro(false);

        fetch(`${import.meta.env.VITE_API_URL}/projetos`)
            .then(res => {
                if (!res.ok) throw new Error('Erro na resposta da API');
                return res.json();
            })
            .then(dados => setProjetos(dados))
            .catch(() => setErro(true))
            .finally(() => setCarregando(false));
    };

    useEffect(() => {
        buscarProjetos();
    }, []);

    const ferramentas = [
        ...new Set(projetos.flatMap((p) => p.tecnologias || []))
    ].sort();

    const projetosFiltrados = filtro === 'todos'
        ? projetos
        : projetos.filter((p) => p.tecnologias.includes(filtro));

    return (
        <section className="projetos" id="projetos">
            <span className="projetos-tagline">// projetos</span>
            <div className="projetos-header">
                <div className="projetos-title">
                    <h2>O que eu construí</h2>
                </div>
                <div className="projetos-count">
                    <span>{projetosFiltrados.length} projetos</span>
                </div>
            </div>

            {ferramentas.length > 0 && (
                <div className="projetos-filtros">
                    {['todos', ...ferramentas].map((f) => (
                        <button
                            key={f}
                            className={`projetos-filtro ${filtro === f ? 'ativo' : ''}`}
                            onClick={() => setFiltro(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            )}

            {carregando && (
                <p className="projetos-status">Carregando projetos...</p>
            )}

            {!carregando && erro && (
                <div className="projetos-status">
                    <p>Não foi possível carregar os projetos.</p>
                    <button className="projetos-tentar-novamente" onClick={buscarProjetos}>
                        Tentar novamente
                    </button>
                </div>
            )}

            {!carregando && !erro && (
                <div className="projetos-grid">
                    {projetosFiltrados.map((p) => (
                        <div key={p._id} className="projeto-card">
                            <div className="projeto-imagem">
                                {p.destaque && <span className="projeto-destaque">destaque</span>}
                                <img src={p.imagem} alt={p.titulo} />
                                {p.galeria?.length > 0 && (
                                    <button
                                        className="projeto-ver-fotos"
                                        onClick={() => setProjetoAberto(p)}
                                    >
                                        Ver mais telas
                                    </button>
                                )}
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
            )}

            {projetoAberto && (
                <GaleriaModal
                    imagens={[projetoAberto.imagem, ...projetoAberto.galeria]}
                    tituloProjeto={projetoAberto.titulo}
                    onClose={() => setProjetoAberto(null)}
                />
            )}
        </section>
    )
}