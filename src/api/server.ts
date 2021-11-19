import express from 'express';
import routes from './routes/routes';
import MongoDB from 'models/mongodb';

const morgan = require('morgan');

// Inicia a conexao com o banco de dados
const Mongo = new MongoDB();
const client = Mongo.connectToMongo();

// Com o mongo iniciado, podemos abrir o servidor
const app = express();

// Define o Logger
app.use(morgan(':date[iso] [:method :url :status] :response-time ms'))

// Adiciona os routes
app.use(routes)

// Inicia o servidor
app.listen(3000, () => { console.log('Servidor Iniciado') })

export default app;