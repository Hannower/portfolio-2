import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './EditarForm.css';

export default function EditarForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formulario, setFormulario] = useState({
        titulo: '',
        descricao: '',
        imagem: '',
        linkDemo: '',
        repositorio: '',
        tecnologias: '',
        destaque: false,
    });

    const [novaImagem, setNovaImagem] = useState(null);
    const [fotosExistentes, setFotosExistentes] = useState([]);
    const [novasFotos, setNovasFotos] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/projetos/${id}`)
            .then(res => res.json())
            .then(dados => {
                setFormulario({
                    ...dados,
                    tecnologias: dados.tecnologias.join(', '),
                });
                setFotosExistentes(dados.galeria || []);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleNovaImagem = (e) => {
        setNovaImagem(e.target.files[0]);
    };

    const handleNovasFotos = (e) => {
        setNovasFotos([...novasFotos, ...Array.from(e.target.files)]);
    };

    const removerFotoExistente = (url) => {
        setFotosExistentes(fotosExistentes.filter((foto) => foto !== url));
    };

    const removerNovaFoto = (indice) => {
        setNovasFotos(novasFotos.filter((_, i) => i !== indice));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosParaEnviar = new FormData();

        dadosParaEnviar.append('titulo', formulario.titulo);
        dadosParaEnviar.append('descricao', formulario.descricao);
        dadosParaEnviar.append('linkDemo', formulario.linkDemo);
        dadosParaEnviar.append('repositorio', formulario.repositorio);
        dadosParaEnviar.append('tecnologias', formulario.tecnologias);
        dadosParaEnviar.append('destaque', formulario.destaque);
        dadosParaEnviar.append('galeriaExistente', JSON.stringify(fotosExistentes));

        if (novaImagem) {
            dadosParaEnviar.append('imagem', novaImagem);
        }

        novasFotos.forEach((arquivo) => {
            dadosParaEnviar.append('galeria', arquivo);
        });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/projetos/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: dadosParaEnviar,
            });

            if (res.ok) {
                navigate('/admin/dashboard');
            } else {
                alert('Erro ao atualizar projeto');
            }
        } catch (erro) {
            alert('Erro de conexão: ' + erro);
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
                    <Link to="/admin/dashboard" className="formulario-voltar-lista">← Lista</Link>
                    <button className="formulario-btn-sair" onClick={handleSair}>sair</button>
                </div>
            </header>

            <main className="formulario-conteudo">
                <span className="formulario-tagline">// editar projeto</span>
                <h1>Editar Projeto</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="titulo">título do projeto</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Ex: E-Commerce Dashboard"
                        value={formulario.titulo}
                        onChange={handleChange}
                    />

                    <label htmlFor="descricao">descrição</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        placeholder="Descreva o que o projeto faz, tecnologias principais e desafios resolvidos..."
                        value={formulario.descricao}
                        onChange={handleChange}
                    />

                    <label>imagem de capa atual</label>
                    <img src={formulario.imagem} alt="Capa atual" className="editar-preview-capa" />

                    <label htmlFor="imagem">trocar imagem de capa</label>
                    <input
                        type="file"
                        id="imagem"
                        name="imagem"
                        accept="image/*"
                        onChange={handleNovaImagem}
                    />
                    <span className="formulario-dica">Deixe em branco para manter a imagem atual</span>
                    
                    <div className="formulario-linha">
                        <div className="formulario-campo">
                            <label htmlFor="demo">link demo</label>
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

                    <label htmlFor="tecnologias">tecnologias</label>
                    <input
                        type="text"
                        id="tecnologias"
                        name="tecnologias"
                        placeholder="React, TypeScript, Node.js, PostgreSQL"
                        value={formulario.tecnologias}
                        onChange={handleChange}
                    />
                    <span className="formulario-dica">Separe as tecnologias por vírgula</span>

                    <label>outras telas</label>
                    {fotosExistentes.length > 0 && (
                        <div className="editar-galeria-grid">
                            {fotosExistentes.map((url) => (
                                <div key={url} className="editar-galeria-item">
                                    <img src={url} alt="Foto da galeria" />
                                    <button
                                        type="button"
                                        className="editar-galeria-remover"
                                        onClick={() => removerFotoExistente(url)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {novasFotos.length > 0 && (
                        <div className="editar-galeria-grid">
                            {novasFotos.map((arquivo, indice) => (
                                <div key={indice} className="editar-galeria-item editar-galeria-item-nova">
                                    <img src={URL.createObjectURL(arquivo)} alt="Nova foto" />
                                    <button
                                        type="button"
                                        className="editar-galeria-remover"
                                        onClick={() => removerNovaFoto(indice)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <input
                        type="file"
                        id="galeria"
                        name="galeria"
                        accept="image/*"
                        multiple
                        onChange={handleNovasFotos}
                    />
                    <span className="formulario-dica">Adicione novas fotos ou remova as existentes clicando no ✕</span>

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
                        <button type="submit" className="formulario-btn-adicionar">Salvar Alterações</button>
                        <Link to="/admin/dashboard" className="formulario-btn-cancelar">Cancelar</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}