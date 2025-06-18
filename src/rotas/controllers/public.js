import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const router = express.Router();

try {
    // Rota para o cadastro de usuários
  router.post("/cadastro", async (req, res) => {
    const dadosUsers = req.body;

    // Cria um novo usuário no banco de dados com a senha criptografada
    const saltRounds = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(dadosUsers.password, saltRounds);

    const newUser = await prisma.user.create({
      data: {
        name: dadosUsers.name,
        email: dadosUsers.email,
        password: hasPassword,
      },
    });
    // Respsonde com uma mensagem de sucesso ou erro ao cadastrar o usuário
    if (newUser) {
      return res
        .status(201)
        .json({ mensagem: "Usuário cadastrado com sucesso!" });
    } else {
      return res.status(500).json({ mensagem: "Erro ao cadastrar usuário!" });
    }
  });

  // Rota para o login de usuários
  router.get("/login", (req, res) => {
    const loginData = req.body;
    console.log(loginData);
    res
      .status(200)
      .json({ mensagem: "Login realizado com sucesso!", dados: loginData });
  });
} catch (error) {
    console.error("Erro ao processar a requisição:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor." });
}

export default router;
