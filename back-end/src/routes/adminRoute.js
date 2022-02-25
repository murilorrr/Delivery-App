const { Router } = require('express');
const { createAnyUser, deleteUser } = require('../controllers/admin');
const { authMiddleware } = require('../middlewares');

const admin = Router();

admin.post('/admin/user', authMiddleware, createAnyUser);

admin.delete('/admin/user/:id', authMiddleware, deleteUser);

module.exports = admin;
