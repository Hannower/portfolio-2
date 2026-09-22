import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // lógica de autenticação virá aqui.
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

                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}