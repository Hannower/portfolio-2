import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Formulario.css';

export default function Formulario() {
    const [destaque, setDestaque] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // lógica de envio virá aqui (chamada à API)
    };

    return (
        <div className="formulario-page">
            <header className="formulario-header">
                <div className="formulario-header-titulo">
                    <Link to="/admin/dashboard" className="formulario-voltar-icon">←</Link>
                    <span>Admin</span>
                    <span className="formulario-badge">área restrita</span>
                </div>

                <div className="formulario-header-acoes">
                    <Link to="/admin/dashboard" className="formulario-voltar-lista">← Lista</Link>
                    <button className="formulario-btn-sair">sair</button>
                </div>
            </header>

            <main className="formulario-conteudo">
                <span className="formulario-tagline">// novo projeto</span>
                <h1>Adicionar Projeto</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="titulo">título do projeto *</label>
                    <input
                        type="text"
                        id="titulo"
                        placeholder="Ex: E-Commerce Dashboard"
                        required
                    />

                    <label htmlFor="descricao">descrição *</label>
                    <textarea
                        id="descricao"
                        placeholder="Descreva o que o projeto faz, tecnologias principais e desafios resolvidos..."
                        required
                    />

                    <label htmlFor="imagem">url da imagem / gif *</label>
                    <input
                        type="text"
                        id="imagem"
                        placeholder="https://..."
                        required
                    />
                    <span className="formulario-dica">Cole a URL de uma imagem ou GIF do projeto</span>

                    <div className="formulario-linha">
                        <div className="formulario-campo">
                            <label htmlFor="demo">link demo</label>
                            <input type="text" id="demo" placeholder="https://..." />
                        </div>

                        <div className="formulario-campo">
                            <label htmlFor="repositorio">repositório</label>
                            <input type="text" id="repositorio" placeholder="https://github.com/..." />
                        </div>
                    </div>

                    <label htmlFor="tecnologias">tecnologias *</label>
                    <input
                        type="text"
                        id="tecnologias"
                        placeholder="React, TypeScript, Node.js, PostgreSQL"
                        required
                    />
                    <span className="formulario-dica">Separe as tecnologias por vírgula</span>

                    <div className="formulario-toggle">
                        <button
                            type="button"
                            className={`formulario-switch ${destaque ? 'ativo' : ''}`}
                            onClick={() => setDestaque(!destaque)}
                        >
                            <span className="formulario-switch-bola"></span>
                        </button>
                        <span>Destacar na página principal</span>
                    </div>

                    <div className="formulario-acoes">
                        <button type="submit" className="formulario-btn-adicionar">Adicionar Projeto</button>
                        <Link to="/admin/dashboard" className="formulario-btn-cancelar">Cancelar</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}