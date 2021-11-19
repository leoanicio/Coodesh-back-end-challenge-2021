import { MongoClient } from 'mongodb';
import { writeFile } from 'fs/promises';

import assert from 'assert';

class MongoDB {
    private client: MongoClient | undefined = undefined;

    constructor() { };

    async connectToMongo(): Promise<void> {
        try {
            this.client = await MongoClient.connect('mongodb://localhost:27017/coodesh_2021');

            this.client.on('error', this.logErro);
        } catch (err) {
            this.client = undefined;
        }
    }

    async logErro(err: any): Promise<void> {
        await writeFile('../log/log.txt', err, { encoding: 'utf8' });
    }

    async find(collection: string, query: any): Promise<any> {
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
        } catch (err) {
            return {
                result: [],
                status: err
            };
        }
    }

    async insert(collection: string, data: any): Promise<any> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).insertOne(data),
                status: ''
            }
        } catch (err) {
            return {
                result: [],
                status: err
            };
        }

    }

    async delete(collection: string, query: any): Promise<any> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).deleteOne(query),
                status: ''
            }
        } catch (err) {
            return {
                result: [],
                status: err
            };
        }
    }

    async update(collection: string, query: any, data: any): Promise<any> {
        try {
            if (!this.client) {
                await this.connectToMongo();
            }

            assert.ok(this.client, 'MongoDB não está conectado');

            return {
                result: await this.client.db('coodesh_2021').collection(collection).updateOne(query, data),
                status: ''
            }
        } catch (err) {
            return {
                result: [],
                status: err
            };
        }
    }
}

export default MongoDB;