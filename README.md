<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,vite,firebase" />
</p>

<h1 align="center">Portfólio Fullstack</h1>

<p align="center">
  Portfólio pessoal com painel administrativo próprio para gerenciar os projetos exibidos.
</p>

<p align="center">
  <a href="https://portfolio-2-bice-gamma-23.vercel.app/">Ver demo</a>
</p>

---

## 📌 Sobre o projeto

Este é o meu portfólio pessoal, desenvolvido do zero como projeto full stack. Além da página pública, o projeto conta com uma área administrativa protegida por autenticação, onde os projetos exibidos na Home são cadastrados, editados e removidos.

A ideia foi construir algo além de uma vitrine estática: um sistema completo, com back-end próprio, banco de dados, upload de imagens e autenticação — para servir como demonstração prática das minhas habilidades como desenvolvedor fullstack.

## ✨ Funcionalidades

**Página pública**
- Landing page com seções de Banner, Skills, Projetos, Sobre mim, Contato e Footer
- Listagem de projetos com filtros dinâmicos por tecnologia
- Galeria de imagens com modal e carrossel para cada projeto
- Layout responsivo

**Área administrativa (restrita)**
- Login protegido por autenticação JWT
- Dashboard com a lista de projetos cadastrados
- Cadastro de novos projetos, com upload de imagem de capa e galeria
- Edição de projetos existentes, incluindo troca de capa e gerenciamento da galeria
- Exclusão de projetos

## 🛠️ Tecnologias

**Front-end**
- React
- React Router
- Vite
- CSS puro

**Back-end**
- Node.js
- Express
- JWT (autenticação)
- Multer

**Banco de dados e armazenamento**
- MongoDB Atlas
- Mongoose
- Cloudinary

**Deploy**
- Vercel (front-end)
- Render (back-end)

## 🚀 Rodando o projeto localmente

### Pré-requisitos
- Node.js instalado
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas)
- Uma conta no [Cloudinary](https://cloudinary.com/)

### Clonando o repositório
```bash
git clone https://github.com/Hannower/portfolio-2
cd seu-repositorio
```

### Back-end
```bash
cd server
npm install
```

Crie um arquivo `.env` na pasta `server` com as variáveis:
```
MONGODB_URI=sua_string_de_conexao_do_atlas
JWT_SECRET=um_texto_longo_e_aleatorio
ADMIN_PASSWORD=sua_senha_de_acesso
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
```

Inicie o servidor:
```bash
npm run dev
```

### Front-end
Em outro terminal:
```bash
cd client
npm install
```

Crie um arquivo `.env` na pasta `client` com a variável:
```
VITE_API_URL=http://localhost:3000
```

Inicie a aplicação:
```bash
npm run dev
```

O front-end estará disponível em `http://localhost:5173` e o back-end em `http://localhost:3000`.

## 📁 Estrutura do projeto

```
├── client/          # Front-end em React (Vercel)
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
└── server/           # Back-end em Node.js e Express (Render)
    ├── models/
    ├── routes/
    ├── middleware/
    └── index.js
```

## 📬 Contato
 
- **E-mail:** hannowersousa@gmail.com
- **LinkedIn:** [linkedin.com/in/hannower-monteiro](https://www.linkedin.com/in/hannower-monteiro/)
- **WhatsApp:** (85) 98538-6977

---

<p align="center">Desenvolvido por Hannower</p>
