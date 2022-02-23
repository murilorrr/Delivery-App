const express = require('express');

const app = express();
const Routes = require('../routes')

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Routes)

module.exports = app;
