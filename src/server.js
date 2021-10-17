import 'dotenv/config';
import express from 'express';

import ControllerUsuario from './app/controllers/ControllerUsuario';

const app = express();

app.use(express.json());

app.get('/', (_, res) => res.json({ api: 'users-registratios-redis-queue' }));
app.post('/usuarios', ControllerUsuario.store);

app.listen(3333 , () => {
    console.info('Servidor rodando em http://localhost:3333');
}); 