import { Schema, model} from 'mongoose';

const erroSchema = new Schema({
    'classe': String,
    'mensagem': String,
    'data_str': String,
    'data_int': Number
});

export default model('log_erros', erroSchema);