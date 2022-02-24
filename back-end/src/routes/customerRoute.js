const { Router } = require('express');
const { createCustomer } = require('../controllers/customer');

const router = Router();

router.post('/customer', createCustomer);

module.exports = router;