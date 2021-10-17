export default {
    chave: 'RelatorioUsuarios',
    opcoes: {
        delay: 5000
    },
    async handle({ data }) {
        
        const { usuario: { nome, email} } = data;

        console.log('>> relatório sendo processado...');
    }
}