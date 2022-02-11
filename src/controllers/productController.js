const asyncHandler = require('express-async-handler')
const Product = require('../models/productSchema')

// Retrieve products
const productsData = require("../data/products-data");
const getProducts = asyncHandler(async(req, res, next) => {

    const product = await Product.find();
    res.send(product)
})

const getProduct = asyncHandler(async(req, res, next) => {
    const id = req.params.productID;
    if (id === "UNIQUE_ID") {
        res.json({
            message: `We've got ${id}`,
        })
    } else if (id === productsData.product1.id) {
        res.json({
            message: `We've got a ${productsData.product1.id}`
        })
    } else {
        res.send({
            message: `We've got id`
        })
    }
})

//Set

const setProduct = asyncHandler(async(req, res, next) => {
    const product = await Product.create({
        text: req.body.text,
    })
    res.status(201).send(product)
})

//PUT

const updateProduct = asyncHandler(async(req, res) => {
    console.log(req.body)

    if (!req.body.name){
        const err = new Error ('Product Name is missing');
        err.status = 401;
        throw err;
    }
    res.status(201).json({
        message: `Product updated: ${req.params.productID}`
    })
})

const deleteProduct = asyncHandler(async(req, res) => {
    res.json({
        message: `Product Deleted ${req.params.productID}`
    })
})

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}