import express from 'express';
import routerCadastro from './src/rotas/controllers/public.js';
import cors from 'cors';
const app = express();
app.use(express.json());


app.use(cors());
// Configuração do CORS para permitir requisições de qualquer origem
cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Permite credenciais (cookies, headers de autenticação, etc.)})
});
// Rota para o cadastro de usuários
app.use('/', routerCadastro);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});