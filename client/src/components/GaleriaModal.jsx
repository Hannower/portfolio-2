import { useState, useEffect } from 'react';
import './GaleriaModal.css';

export default function GaleriaModal({ imagens, tituloProjeto, onClose }) {
    const [indice, setIndice] = useState(0);

    const anterior = () => setIndice((i) => (i === 0 ? imagens.length - 1 : i - 1));
    const proxima = () => setIndice((i) => (i === imagens.length - 1 ? 0 : i + 1));

    useEffect(() => {
        const handleTeclado = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') anterior();
            if (e.key === 'ArrowRight') proxima();
        };
        document.addEventListener('keydown', handleTeclado);
        return () => document.removeEventListener('keydown', handleTeclado);
    });

    return (
        <div className="galeria-overlay" onClick={onClose}>
            <div className="galeria-conteudo" onClick={(e) => e.stopPropagation()}>
                <button className="galeria-fechar" onClick={onClose}>✕</button>

                <div className="galeria-imagem-container">
                    {imagens.length > 1 && (
                        <button className="galeria-seta galeria-seta-esquerda" onClick={anterior}>‹</button>
                    )}

                    <img src={imagens[indice]} alt={`${tituloProjeto} - tela ${indice + 1}`} />

                    {imagens.length > 1 && (
                        <button className="galeria-seta galeria-seta-direita" onClick={proxima}>›</button>
                    )}
                </div>

                {imagens.length > 1 && (
                    <div className="galeria-pontos">
                        {imagens.map((_, i) => (
                            <button
                                key={i}
                                className={`galeria-ponto ${i === indice ? 'ativo' : ''}`}
                                onClick={() => setIndice(i)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}