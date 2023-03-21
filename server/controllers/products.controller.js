const { Product } = require("../models/products.model");

const createProduct = (req, res) => {
    console.log("controller: createProduct", req.body);
    Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json({ product: newlyCreatedProduct });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const getAllProducts = (req, res) => {
    console.log("controller: getAllProducts");
    Product.find({})
        .then((allProducts) => {
            res.json({ products: allProducts });
        })
        .catch((error) => {
            res.json({ ...error, message: error.message });
        });
};

const getOneProduct = (req, res) => {
    console.log("controller: getOneProduct", req.params);
    Product.findOne({ _id: req.params._id })
        .then((oneProduct) => {
            res.json({ product: oneProduct });
        })
        .catch((error) => {
            res.json({ ...error, message: error.message });
        });
};

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
};
