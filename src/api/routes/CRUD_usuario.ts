import { Router, Request, Response } from 'express';

const CRUD = Router();

// Lista todos os usuarios
CRUD.get('/users', async (req: Request, res: Response): Promise<void> => {
    res.send(
        'Listar todos usuarios'
    )
})

// Lista um usuario especifico
CRUD.get('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {
    res.send(
        `${req.params.id_usuario}`
    )
})

// Edita um usuario especifico
CRUD.put('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {
    res.send(
        `${req.params.id_usuario}`
    )
})

// Deleta um usuario
CRUD.delete('/users/:id_usuario', async (req: Request, res: Response): Promise<void> => {

})

export default CRUD;