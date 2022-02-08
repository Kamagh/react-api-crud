// Retrieve products
const productsData = require("../data/products-data");
const getProducts = (req, res, next) => {
    res.status(201).json({
        message: "Handling GET request for /products...",
        product: productsData.product1
    })
}

const gertProduct = (req, res, next) => {
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
}

//Set

const setProduct = (req, res, next) => {
    const user = {
        name: req.body.name,
        age: req.body.age
    }
    res.status(201).send({
        message: "Handling GET request for /products...",
        product: productsData.product2,
        username: user.name
    })
}

//PUT

const updateProduct = (req, res) => {
    console.log(req.body)

    if (!req.body.name){
        const err = new Error ('Product Name is missing');
        err.status = 401;
        throw err;
    }
    res.status(201).json({
        message: `Product updated: ${req.params.productID}`
    })
}

const deleteProduct = (req, res) => {
    res.json({
        message: `Product Deleted ${req.params.productID}`
    })
}

module.exports = {
    getProducts,
    gertProduct,
    setProduct,
    updateProduct,
    deleteProduct
}