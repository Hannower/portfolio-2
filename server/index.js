import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import projetosRoutes from './routes/projetos.js';
import Projeto from './models/Projeto.js';
import cors from 'cors';

const app = express();
const porta = 3000;

app.use(express.json())
app.use(cors());
app.use('/projetos', projetosRoutes);

// app.get('/', (req, res) => {
//     res.send('API funcionando...');
// })

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