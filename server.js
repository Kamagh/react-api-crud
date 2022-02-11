const express = require('express');
const connectDB = require('./src/config/db');
const productRoutes = require("./src/routes/products");
const orderRoutes = require("./src/routes/orders");
const dotenv = require("dotenv").config();
const app = express();
connectDB();

const port = process.env.PORT || 5588;

/*app.get('/', (req, res) => {
    res.json({
        message: "Server started"
    })
});*/

app.use(express.json()); // body
app.use(express.urlencoded({extended: false})); //special body x-www
app.use(express.text());

app.use('/api/products', productRoutes) // localhost/
app.use('/api/orders', orderRoutes)

app.use((req, res, next) => {
    const error = new Error('Request Not Found.');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 405);
    res.send({
        error: error.message
    })

});



//const server = http.createServer(app);

app.listen(port, () => console.log(`Server listen: ${port}`));