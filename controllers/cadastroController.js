import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class CadastroController {
    static async CadastraUsuario(req, res) {
        try {
            const { titulo, descricao, atividades, requisitos } = req.body;
    
            const cadastro = await prisma.vaga.create({
                data: {
                    titulo,
                    descricao,
                    atividades,
                    requisitos
                }
            });
    
            res.json(cadastro);
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
