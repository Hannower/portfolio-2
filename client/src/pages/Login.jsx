import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ senha }),
            });

            const dados = await res.json();

            if (res.ok) {
                localStorage.setItem('token', dados.token);
                navigate('/admin/dashboard');
            } else {
                setErro(dados.mensagem || 'Erro ao entrar');
            }
        } catch (err) {
            setErro('Erro de conexão com o servidor');
        }
    };

    return (
        <div className="login-page">
            <Link to="/" className="login-voltar">← Voltar ao portfólio</Link>

            <div className="login-card">
                <span className="login-tagline">// área restrita</span>
                <h1>Login</h1>
                <p className="login-subtitulo">Acesso exclusivo para gerenciar seus projetos.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="senha">senha de acesso</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="••••••••"
                    />

                    {erro && <p className="login-erro">{erro}</p>}

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}