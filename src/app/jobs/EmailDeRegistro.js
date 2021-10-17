import Email from '../lib/Email';

export default {
    chave: 'EmailDeRegistro',
    async handle({ data }) {
        
        const { usuario: { nome, email} } = data;

        await Email.sendMail({
            from: 'Teste de fila <teste.fila@email.com>' ,
            to: `${nome} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${nome}, bem-vindo ao sistema de filas com redis :D`
        });
    }
}