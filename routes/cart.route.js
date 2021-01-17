const express = require('express');
const router = express.Router();
const controller = require('../controller/cart.controller');

router.get('/add/:productId', controller.addToCart)
router.get('/remove/:productId', controller.removeFromCart)
router.get('/checkout', controller.checkout)

module.exports = router;