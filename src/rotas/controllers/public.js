import express from 'express';
import prisma, { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const router = express.Router();

router.post('/cadastro', async (req, res) => {
    const dadosUsers = req.body;
    console.log(dadosUsers);

    const newUser = await prisma.user.create({
        data: {
            name:dadosUsers.name,
            email: dadosUsers.email,
            password: dadosUsers.password,
        },
    });
    if (!newUser) {
        return res.status(400).json({ mensagem: "Erro ao cadastrar usuário!" });
    }
    
    res.status(200).json({
        mensagem: "Dados recebidos com sucesso!",
        dados: dadosUsers
    });
});

router.get('/login', (req, res) => {
    const loginData = req.body;
    console.log(loginData);
    res.status(200).json({mensagem: "Login realizado com sucesso!", dados: loginData});
})

export default router;