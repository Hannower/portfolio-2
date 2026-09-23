import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import projetosRoutes from './routes/projetos.js';
import Projeto from './models/Projeto.js';
import cors from 'cors';

const app = express();
const porta = 3000;

app.use(express.json())
app.use(cors());
// app.use(cors({
//   origin: 'https://portfolio-2-bice-gamma-23.vercel.app'
// }));
app.use('/projetos', projetosRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando...');
})

app.use((erro, req, res, next) => {
  console.log('ERRO DE MIDDLEWARE:', erro.message);
  res.status(500).json({ mensagem: erro.message });
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conexão ao banco realizada com sucesso!');
    })
    .catch((erro) => {
        console.log("Erro ao conectar banco: " + erro);
    });