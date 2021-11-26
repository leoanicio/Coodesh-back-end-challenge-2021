import { appendFile } from 'fs/promises';
import MongoDB from 'models/mongodb';

class ClasseBase extends MongoDB {
    constructor() {
        super();
    }

    async Autenticar(key: string, value: string): Promise < boolean > {
        try{

        } catch(e) {
            this.LogErro(e);
        }
        return true;
    }
}

export default ClasseBase;