import express from "express";
import CadastroController from "../controllers/cadastroController.js";

const router = express.Router();

router.post("/", CadastroController.CadastraUsuario);

export default function routes(app) {
    app.use('/cadastro', router);
}
