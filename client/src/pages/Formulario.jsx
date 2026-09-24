import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Formulario.css';


export default function Formulario() {
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({
        titulo: '',
        descricao: '',
        imagem: '',
        linkDemo: '',
        repositorio: '',
        tecnologias: '',
        destaque: false,
    })

    const handleChange = (e) => {
        const { name, type, value, files } = e.target;

        setFormulario({
            ...formulario,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosParaEnviar = new FormData();

        dadosParaEnviar.append('titulo', formulario.titulo);
        dadosParaEnviar.append('descricao', formulario.descricao);
        dadosParaEnviar.append('imagem', formulario.imagem);
        dadosParaEnviar.append('linkDemo', formulario.linkDemo);
        dadosParaEnviar.append('repositorio', formulario.repositorio);
        dadosParaEnviar.append('tecnologias', formulario.tecnologias);
        dadosParaEnviar.append('destaque', formulario.destaque);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projetos`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: dadosParaEnviar,
            });

            if (res.ok) {
                navigate('/admin/dashboard');
            } else {
                alert('Erro ao cadastrar projeto');
            }
        } catch (erro) {
            alert('Erro de conexão:' + erro);
        }
    };

    const handleSair = () => {
        localStorage.removeItem('token');
        navigate('/admin');
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
                    <Link to="/admin/dashboard" className="formulario-btn-cancelar">Cancelar</Link>
                    <button className="formulario-btn-sair" onClick={handleSair}>sair</button>
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
                        name="titulo"
                        placeholder="Ex: E-Commerce Dashboard"
                        value={formulario.titulo}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="descricao">descrição *</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        placeholder="Descreva o que o projeto faz, tecnologias principais e desafios resolvidos..."
                        value={formulario.descricao}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="imagem">imagem de capa *</label>
                    <input
                        type="file"
                        id="imagem"
                        name="imagem"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                    <span className="formulario-dica">Selecione uma imagem ou GIF do projeto</span>

                    <div className="formulario-linha">
                        <div className="formulario-campo">
                            <label htmlFor="demo">link demo *</label>
                            <input
                                type="text"
                                id="demo"
                                name="linkDemo"
                                placeholder="https://..."
                                value={formulario.linkDemo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="formulario-campo">
                            <label htmlFor="repositorio">repositório</label>
                            <input
                                type="text"
                                id="repositorio"
                                name="repositorio"
                                placeholder="https://github.com/..."
                                value={formulario.repositorio}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <label htmlFor="tecnologias">tecnologias *</label>
                    <input
                        type="text"
                        id="tecnologias"
                        name="tecnologias"
                        placeholder="React, TypeScript, Node.js, PostgreSQL"
                        value={formulario.tecnologias}
                        onChange={handleChange}
                        required
                    />
                    <span className="formulario-dica">Separe as tecnologias por vírgula</span>

                    <div className="formulario-toggle">
                        <button
                            type="button"
                            className={`formulario-switch ${formulario.destaque ? 'ativo' : ''}`}
                            onClick={() => setFormulario({ ...formulario, destaque: !formulario.destaque })}
                        >
                            <span className="formulario-switch-bola"></span>
                        </button>
                        <span>Destacar na página principal</span>
                    </div>

                    <div className="formulario-acoes">
                        <button type="submit" className="formulario-btn-adicionar">Adicionar Projeto</button>
                        <Link to="/admin/editar" className="formulario-btn-cancelar">Cancelar</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}