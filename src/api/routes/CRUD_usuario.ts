import { Router, Request, Response } from 'express';
import CRUD_usuario from '../../services/CRUD_usuario';

const route = Router();
const CRUD = new CRUD_usuario();

// Lista todos os usuarios
route.get('/users', async (req: Request, res: Response) => {
    try {
        const { result, status } = await CRUD.ListaUsuarios();

        if (status != '') {
            res.status(500).json({
                message: status
            });
        }

        res.status(200).json(result);

    } catch (error) {
        res.status(500)
        res.send("Erro interno")
    }
});

// Lista um usuario especifico
route.get('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_usuario } = req.params;
        const { result, status } = await CRUD.ListaUsuarios(id_usuario);

        if (status != '') {
            res.status(500).json({
                message: status
            });
        }

        res.status(200).json(result.length > 0 ? result[0] : {});

    } catch (error) {
        res.status(500)
        res.send("Erro interno")
    }
})

// Edita um usuario especifico
route.put('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {
    res.send(
        `${req.params.id_usuario}`
    )
})

// Deleta um usuario
route.delete('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_usuario } = req.params;
        const { result, status } = await CRUD.RemoveUsuario('usuarios', { id_usuario });

        if (status != '') {
            res.status(500).json({
                message: status
            });
        }
    } catch (error) {
        res.status(500)
        res.send("Erro interno")
    }
})

export default CRUD;