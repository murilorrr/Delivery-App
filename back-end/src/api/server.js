require('dotenv').config();
const io = require('socket.io');
const http = require('http');
const changeOrderStatus = require('../sockets/changeOrderStatus');
const app = require('./app');

const port = process.env.PORT || 3001;

const httpServer = http.createServer(app);
const socketio = io(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT'],
  },
});

changeOrderStatus(socketio);

httpServer.listen(port);

console.log(`Api rodando na porta ${port}`);
