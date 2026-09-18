import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('API funcionando...');
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})

// console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexão ao banco realizada com sucesso!');
    })
    .catch((erro) => {
        console.log("Erro ao conectar banco: " + erro);
    });