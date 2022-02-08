const express = require('express');
const ordersData = require("../data/orders-data");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: "Handling GET request for /products...",
        order: ordersData.order1
    })
})
    .post('/', (req, res, next) => {
        res.status(201).json({
            message: "Handling GET request for /products...",
            order2: ordersData.order2
        })
    })



module.exports = router;

//router.get('/:orderID')