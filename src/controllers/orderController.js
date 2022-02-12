const Order = require('../models/orderSchema');
const asyncHandler = require('express-async-handler');

//GET

const getProduct = asyncHandler(async (req, res, next) => {
    const order = await Order.find();

    res.send(order);
/*    res.status(201).json({
        message: "Handling GET request for /products...",
        order: ordersData.order1
    })*/
})

//POST
const postProduct = asyncHandler(async (req, res, next) => {
    const order = await Order.create({
        text: req.body.text,

    })
    res.send(order)
})

module.exports = {getProduct, postProduct}

