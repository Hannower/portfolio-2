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

router.post('/', auth, upload.single('imagem'), async (req, res) => {
    try {
        const tecnologias = req.body.tecnologias
            ? req.body.tecnologias
                .split(',')
                .map((t) => t.trim())
                .filter((t) => t !== '')
            : [];

        const novoProjeto = await Projeto.create({
            ...req.body,
            tecnologias,
            imagem: req.file.path,
        });
        res.status(201).json(novoProjeto);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao criar projeto', erro });
    }
})

router.put('/:id', auth , async (req, res) => {
    try {
        const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(projetoAtualizado);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao atualizar projeto', erro });
    }
})

router.delete('/:id', auth , async (req, res) => {
    try {
        const projetoDeletado = await Projeto.findByIdAndDelete(req.params.id);
        res.json(projetoDeletado);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao deletar projeto", erro });
    }
})

export default router;
