import express from 'express';
import Projeto from '../models/Projeto.js';
import upload from '../middleware/upload.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dados = await Projeto.find();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar projetos', erro });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const projeto = await Projeto.findById(req.params.id);
        if (!projeto) {
            return res.status(404).json({ mensagem: 'Projeto não encontrado' });
        }
        res.json(projeto);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar projeto', erro });
    }
})

router.post(
    '/',
    auth,
    upload.fields([
        { name: 'imagem', maxCount: 1 },
        { name: 'galeria', maxCount: 6 },
    ]),
    async (req, res) => {
        try {
            const tecnologias = req.body.tecnologias
                ? req.body.tecnologias
                    .split(',')
                    .map((t) => t.trim())
                    .filter((t) => t !== '')
                : [];

            const galeria = req.files.galeria
                ? req.files.galeria.map((arquivo) => arquivo.path)
                : [];

            const novoProjeto = await Projeto.create({
                ...req.body,
                tecnologias,
                galeria,
                imagem: req.files.imagem[0].path,
            });
            res.status(201).json(novoProjeto);
        } catch (erro) {
            res.status(400).json({ mensagem: 'Erro ao criar projeto', erro });
        }
    }
)

router.put(
    '/:id',
    auth,
    upload.fields([
        { name: 'imagem', maxCount: 1 },
        { name: 'galeria', maxCount: 6 },
    ]),
    async (req, res) => {
        try {
            const dadosAtualizados = { ...req.body };

            if (dadosAtualizados.tecnologias) {
                dadosAtualizados.tecnologias = dadosAtualizados.tecnologias
                    .split(',')
                    .map((t) => t.trim())
                    .filter((t) => t !== '');
            }

            if (req.files?.imagem) {
                dadosAtualizados.imagem = req.files.imagem[0].path;
            }

            const galeriaExistente = req.body.galeriaExistente
                ? JSON.parse(req.body.galeriaExistente)
                : [];
            const novasFotos = req.files?.galeria
                ? req.files.galeria.map((arquivo) => arquivo.path)
                : [];

            dadosAtualizados.galeria = [...galeriaExistente, ...novasFotos];
            delete dadosAtualizados.galeriaExistente;

            const projetoAtualizado = await Projeto.findByIdAndUpdate(
                req.params.id,
                dadosAtualizados,
                { new: true }
            );
            res.json(projetoAtualizado);
        } catch (erro) {
            res.status(400).json({ mensagem: 'Erro ao atualizar projeto', erro });
        }
    }
)

router.delete('/:id', auth , async (req, res) => {
    try {
        const projetoDeletado = await Projeto.findByIdAndDelete(req.params.id);
        res.json(projetoDeletado);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao deletar projeto", erro });
    }
})

export default router;
