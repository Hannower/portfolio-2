import express from 'express';
import Projeto from '../models/Projeto.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const dados = await Projeto.find();
        res.json(dados);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar projetos', erro});
    }
})

router.post('/', async (req, res) => {
  try {
    const novoProjeto = await Projeto.create(req.body);
    res.status(201).json(novoProjeto);
  } catch (erro) {
    res.status(400).json({ mensagem: 'Erro ao criar projeto', erro });
  }
})

router.put('/:id', async (req, res) => {
    try {
        const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(projetoAtualizado);
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao atualizar projeto', erro});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const projetoDeletado = await Projeto.findByIdAndDelete(req.params.id);
        res.json(projetoDeletado);   
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao deletar projeto", erro});
    }
})

export default router;
