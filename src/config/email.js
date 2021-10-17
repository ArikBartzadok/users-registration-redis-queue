export default {
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORTA,
    auth: {
        user: process.env.MAILTRAP_USUARIO,
        pass: process.env.MAILTRAP_SENHA
    }
};