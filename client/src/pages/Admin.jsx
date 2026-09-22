import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Admin.css';

export default function Admin() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/projetos')
            .then(response => response.json())
            .then(dados => setProjetos(dados));
    }, [])

    const handleExcluir = async (id) => {
        const confirmacao = confirm('Confirma exclusão do projeto?');

        if (!confirmacao) return;

        try {
            await fetch(`http://localhost:3000/projetos/${id}`, {
                method: 'DELETE',
            });

            setProjetos(projetos.filter((p) => p._id !== id));

        } catch (erro) {
            alert('Erro ao excluir projeto');
        }
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <div className="admin-header-titulo">
                    <Link to="/" className="admin-voltar">←</Link>
                    <span>Admin</span>
                    <span className="admin-badge">área restrita</span>
                </div>

                <div className="admin-header-acoes">
                    <Link to="/admin/novo" className="admin-btn-novo">+ Novo Projeto</Link>
                    <button className="admin-btn-sair">sair</button>
                </div>
            </header>

            <main className="admin-conteudo">
                <span className="admin-tagline">// dashboard</span>
                <h1>Seus Projetos</h1>
                <p className="admin-subtitulo">{projetos.length} projetos cadastrados</p>

                <div className="admin-lista">
                    {projetos.map((p) => (
                        <div key={p._id} className="admin-card">
                            <img src={p.imagem} alt={p.titulo} className="admin-card-imagem" />

                            <div className="admin-card-info">
                                <div className="admin-card-titulo">
                                    <h3>{p.titulo}</h3>
                                    {p.destaque && <span className="admin-card-destaque">destaque</span>}
                                </div>
                                <p>{p.descricao}</p>
                                <div className="admin-card-tags">
                                    {p.tecnologias.map((tag) => (
                                        <span key={tag} className="admin-card-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="admin-card-acoes">
                                <Link to={`/admin/editar/${p._id}`} className="admin-btn-editar">Editar</Link>
                                <button className="admin-btn-excluir" onClick={() => handleExcluir(p._id)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}