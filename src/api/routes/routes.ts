import { Router, Request, Response, NextFunction } from 'express';

import CRUD_usuario from './CRUD_usuario'

const app: Router = Router();

app.use(CRUD_usuario)

app.get('/', async (req: Request, res: Response) => {
    res.status(200)
    res.send('REST Back-end Challenge 20201209 Running')
})

export default app;