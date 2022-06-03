const app = require('./app');

const PORT = process.env.PORT || 3000;

const cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
})
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
