const mongoose = require('mongoose');

//Construyendo el esquema
const brandSchema = new mongoose.Schema({
    code: {
        brand: String, 
    }
});

//Modelo
const brandModel = mongoose.model('Brand', brandSchema, 'brand');

module.exports = brandModel;
