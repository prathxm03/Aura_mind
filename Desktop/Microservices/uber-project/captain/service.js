const http = require('http')
const app = require('./app')
const PORT = 3002;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});