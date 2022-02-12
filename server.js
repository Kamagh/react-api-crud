const express = require('express');
require("dotenv").config();
const connectDB = require('./src/config/db');
const productRoutes = require("./src/routes/products");
const orderRoutes = require("./src/routes/orders");
const {errorHandler} = require("./src/middleware/errorHandler")
const app = express();
connectDB();

const port = process.env.PORT || 5588;

app.use(express.json()); // body
app.use(express.urlencoded({extended: false})); //special body x-www
app.use(express.text());

app.use('/api/products', productRoutes) // localhost/
app.use('/api/orders', orderRoutes)

app.use(errorHandler);

/*app.use((req, res, next) => {
    const error = new Error('Request Not Found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 405);
    res.send({
        error: error.message
    })

});*/

//const server = http.createServer(app);

app.listen(port, () => console.log(`Server listen: ${port}`));