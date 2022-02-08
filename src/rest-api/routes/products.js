const express = require('express');
const productsData = require('../data/products-data')
const router = express.Router();
const {
    getProducts,
    gertProduct,
    setProduct,
    updateProduct,
  g  deleteProduct
} = require('../controllers/productController')

/*router
    .get('/', getProducts)
    .post('/', setProduct)
    .get('/:productID', gertProduct)
    .put('/:productID', updateProduct)
    .delete('/:productID', deleteProduct)*/

router.route('/').get

module.exports = router;