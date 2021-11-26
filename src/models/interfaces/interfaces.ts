import { InsertOneResult, DeleteResult, UpdateResult } from 'mongodb';
import { Document } from 'bson';

interface ListaUsuario {
    result: Document[],
    status: string
}

interface InsereUsuario {
    result: InsertOneResult | undefined,
    status: string
}

interface DeletaUsuario {
    result: DeleteResult | undefined,
    status: string
}

interface AtualizaUsuario {
    result: UpdateResult | undefined,
    status: string
}

export {
    ListaUsuario,
    InsereUsuario,
    DeletaUsuario,
    AtualizaUsuario
}