const bodyParser = require('body-parser');
const express = require('express');
const wagner = require('wagner-core');

require('./models/models')(wagner);

//Importar productRouter
const productRouter = require('./routers/product.router')(wagner);
const brandRouter = require('./routers/brand.router')(wagner);

// Configurando servidor express
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/products",productRouter);
app.use("/brand",brandRouter);

module.exports = app;