import express from 'express';
import routerCadastro from './src/rotas/controllers/public.js'

const app = express();
app.use(express.json());


// Rota para o routerCadastro de usuários
app.use('/', routerCadastro);


app.listen(3000, (() => {
    console.log("Servidor rodando!")
}))