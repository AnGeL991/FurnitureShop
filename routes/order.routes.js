const express = require('express');
const router = express.Router();

const OrderProductController = require('../controllers/orderController');

router.get('/order',OrderProductController.getAll);
router.post('/order',OrderProductController.postOne);

module.exports = router;
