const { Router } = require('express');
const { createAnyUser } = require('../controllers/admin');
const { authMiddleware } = require('../middlewares');

const admin = Router();

admin.post('/admin/user', authMiddleware, createAnyUser);

module.exports = admin;
