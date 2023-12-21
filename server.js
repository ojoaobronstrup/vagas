import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
routes(app);

app.listen(8000, () => {
    console.log(`Servidor rodando na porta 8000`);
});
