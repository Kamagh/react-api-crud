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
        price: req.body.price,
    })
    res.status(201).send(product)
})

//PUT

const updateProduct = asyncHandler(async(req, res) => {

    const updatedProduct = await Product.findOneAndUpdate({
        id: req.params.productID
    }, {
        text: "Hello Updated product"
    }, {
        new: true
    })
    res.status(201).json(updatedProduct)
})

const deleteProduct = asyncHandler(async(req, res) => {

    const id = req.params.productID

    const deletedProduct = await Product.findByIdAndRemove(id)
    res.status(201).json(deletedProduct)
})

module.exports = {
    getProducts,
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}