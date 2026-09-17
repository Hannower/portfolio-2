import { Link } from 'react-router-dom';
import './Admin.css';

const projetosMock = [
    {
        id: 1,
        titulo: 'E-Commerce Dashboard',
        descricao: 'Dashboard completo para gerenciamento de loja virtual com gráficos de vendas, controle de estoque e gestão de pedidos e...',
        imagem: '/projetos/dashboard.png',
        tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
        destaque: true,
    },
    {
        id: 2,
        titulo: 'API REST Node.js',
        descricao: 'API completa com autenticação JWT, CRUD de usuários, upload de arquivos e documentação Swagger integrada.',
        imagem: '/projetos/api.png',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        destaque: true,
    },
    {
        id: 3,
        titulo: 'App de Tarefas',
        descricao: 'Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias, prioridades e sincronização em tempo real.',
        imagem: '/projetos/tarefas.png',
        tags: ['React', 'Firebase', 'Framer Motion'],
        destaque: false,
    },
];

export default function Admin() {
    const handleExcluir = (id) => {
        // lógica de exclusão virá aqui (chamada à API)
        console.log('Excluir projeto', id);
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
                <p className="admin-subtitulo">{projetosMock.length} projetos cadastrados</p>

                <div className="admin-lista">
                    {projetosMock.map((p) => (
                        <div key={p.id} className="admin-card">
                            <img src={p.imagem} alt={p.titulo} className="admin-card-imagem" />

                            <div className="admin-card-info">
                                <div className="admin-card-titulo">
                                    <h3>{p.titulo}</h3>
                                    {p.destaque && <span className="admin-card-destaque">destaque</span>}
                                </div>
                                <p>{p.descricao}</p>
                                <div className="admin-card-tags">
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="admin-card-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="admin-card-acoes">
                                <Link to={`/admin/editar/${p.id}`} className="admin-btn-editar">Editar</Link>
                                <button className="admin-btn-excluir" onClick={() => handleExcluir(p.id)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}