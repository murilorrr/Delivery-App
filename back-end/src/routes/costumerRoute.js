const { Router } = require('express');
const { createCostumer } = require('../controllers/costumers');

const router = new Router();

router.post('/costumer', createCostumer);

module.exports = router;