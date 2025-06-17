import express from 'express';

const router = express.Router();

router.post('/cadastro', (req, res) => {
    const dadosUsers = req.body;
    console.log(dadosUsers);
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