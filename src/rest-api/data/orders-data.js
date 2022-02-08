const products = require('./products-data.js');

let productIDs = Object
    .values(products)
    .map(prod => ({
        id: prod.id
    }))

module.exports = ordersData = {
    order1: {
        id: `“order_01”`,
        countryFrom: `US`,
        countryTo: `ARM`,
        productID: productIDs[0].id,
    },
    order2: {
        id: `“order_02”`,
        countryFrom: `GER`,
        countryTo: `ARM`,
        productID: productIDs[1].id,
    },

}
console.log(ordersData)

