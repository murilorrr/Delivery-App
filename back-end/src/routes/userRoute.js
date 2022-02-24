const { Router } = require('express');
const { create, getAll } = require('../controllers/user');
const { authMiddleware } = require('../middlewares');

const router = Router();

router.post('/user', create);

router.post('/user', authMiddleware, getAll);

module.exports = router;