import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({

    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    imagem: {type: String, required: true},
    galeria: {type: [String], default: []},
    linkDemo: {type: String, required: true},
    repositorio: {type: String, required: false},
    tecnologias: {type: [String], required: true},
    destaque: {type: Boolean, default: false}

});

const Projeto = mongoose.model('Projeto', projetoSchema);

export default Projeto;