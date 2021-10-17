import Fila from '../lib/Fila';

export default {
    async store(req, res) {
        try {
            const { nome, email, senha } = req.body;

            const usuario = {
                nome,
                email,
                senha
            };

            console.log('>> enviando para a fila...')
            await Fila.add('EmailDeRegistro', { usuario });
            await Fila.add('RelatorioUsuarios', { usuario });

            return res.json(usuario);
        } catch (erro) {
            return res.json({ erro });
        }
    }
}