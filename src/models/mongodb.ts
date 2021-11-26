import { MongoClient } from 'mongodb';
import { appendFile } from 'fs/promises';
import erroSchema from '../models/schemas/erro';

import assert from 'assert';

class MongoDB {
    private client: MongoClient | undefined = undefined;

    constructor() {
    };

    async connectToMongo(): Promise<void> {
        try {
            this.client = await MongoClient.connect('mongodb://localhost:27017/coodesh_2021');

            this.client.on('error', err => this.LogErroMongo(err));
        } catch (err) {
            this.client = undefined;
        }
    }

    async find(collection: string, query: any): Promise<ListaUsuario> {
        try {
            // Verifica se a conexao esta aberta
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).find(query).toArray(),
                status: ''
            }
        } catch (err: any) {
            return {
                result: [],
                status: err.message
            };
        }
    }

    async insert(collection: string, data: any): Promise<InsereUsuario> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).insertOne(data),
                status: ''
            }
        } catch (err: any) {
            return {
                result: undefined,
                status: err.message
            };
        }

    }

    async delete(collection: string, query: any): Promise<DeletaUsuario> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).deleteOne(query),
                status: ''
            }
        } catch (err: any) {
            return {
                result: undefined,
                status: err.message
            };
        }
    }

    async update(collection: string, query: any, data: any): Promise<AtualizaUsuario> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).updateOne(query, data),
                status: ''
            }
        } catch (err: any) {
            return {
                result: undefined,
                status: err.message
            };
        }
    }

    async FormataErro(classerro: string, err: any): Promise<string> {
        const data = new Date().toLocaleString();

        return `[${data}] ERRO: ${classerro} - ${err}`;
    }

    async LogErro(err: any): Promise<void> {
        const classe = arguments.callee.caller.name;

        const erro = new erroSchema({
            classe,
            erro: err
        });

        await this.insert('log_erros', mensagem_erro);
    }

    async LogErroMongo(err: any): Promise<void> {
        const classe = arguments.callee.caller.name;
        const mensagem_erro = await this.FormataErro(classe, err);

        await appendFile('../log/log_erro_mongo.txt', mensagem_erro, { encoding: 'utf8' });
    }

}

export default MongoDB;