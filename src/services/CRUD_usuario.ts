import { Request, Response } from 'express';
import ClasseBase from './ClasseBase';


class CRUD_usuario extends ClasseBase {
    constructor() {
        super();
    }

    async ListaUsuarios(id_usuario?: string): Promise<ListaUsuario> {
        try {
            const query = id_usuario ? { id_usuario } : {};

            const { result, status } = await this.find('usuarios', query);

            if (status != '') {
                this.LogErro(status);
            }

            return {
                result,
                status
            };
        } catch (e: any) {
            this.LogErro(e);

            return {
                result: [],
                status: e.message
            };
        }
    }

    async RemoveUsuario(id_usuario: string): Promise<ListaUsuario> {
        try {
            const { result, status } = await this.delete('usuarios', { id_usuario });

            if (status != '') {
                this.LogErro(status);
            }

            return {
        }
    }

}

export default CRUD_usuario;