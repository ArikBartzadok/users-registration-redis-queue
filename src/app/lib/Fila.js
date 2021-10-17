import Fila from 'bull';
import redisConfig from '../../config/redis' ;

import * as jobs from '../jobs';

const filas = Object.values(jobs).map((job) => ({
    bull: new Fila(job.chave, redisConfig),
    nome: job.chave,
    opcoes: job.opcoes,
    handle: job.handle
}));

export default {
    filas,
    add(nome, data) {
        const fila = this.filas.find((fila) => fila.nome === nome);
        return fila.bull.add(data, fila.opcoes);
    },
    process() {
        return this.filas.forEach((fila) => {
            fila.bull.process(fila.handle);

            fila.bull.on('failed', (job, erro) => {
                console.log('Job falhou...', fila.chave, job.data);
                console.error(erro)
            });
        });
    }
}