const express = require('express');
const ordersData = require('../data/orders-data');
const router = express.Router();
const {
    getProduct,
    postProduct
} = require('../controllers/orderController');


router.get('/', getProduct)
    .post('/', postProduct)


module.exports = router;

//router.get('/:orderID')