const status = require('http-status');

let _brand;

const getAll = (req, res) => {
    _brand.find({})
        .then(brand => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: brand
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error!!!",
                detail: error
            });
        });
};

const create = (req, res) => {
    const brand = req.body;
    console.log(req);
    _product.create(brand)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "Saved!!!",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar!!!",
                detail: error
            });
        });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se eliminó!!!",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se eliminó!!!",
                detail: error
            });
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    Product.findOne({ _id: id })
        .then(brand => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Éxito",
                detail: brand
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Éxito",
                detail: error
            });
        });
}

module.exports = (Brand) => {
    _brand = Brand;
    return ({
        getAll, create, deleteProduct, getById
    });
}