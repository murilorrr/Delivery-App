require('express-async-errors');
const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');
const io = require('socket.io');
const { createServer } = require('http');
const changeOrderStatus = require('../sockets/changeOrderStatus');
const { errorMiddleware } = require('../middlewares');
const {
  productsRoute,
  sellerRoute,
  loginRoute,
  userRoute,
  salesRoute,
  adminRoute,
} = require('../routes');

const app = express();

const http = createServer(app);
const socketio = io(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  },
});

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 150, // Limit each IP to 150 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// apply rate limiter to all requests

app.use(limiter);
app.use(express.json());
app.use(cors());

changeOrderStatus(socketio);

app.get('/', (_req, res) => res.send('Tudo Ok Por Aqui'));
app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
app.use(loginRoute);
app.use(userRoute);
app.use(adminRoute);
app.use(productsRoute);
app.use(sellerRoute);
app.use(salesRoute);

app.use(errorMiddleware);

module.exports = http;
