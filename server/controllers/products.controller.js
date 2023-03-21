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
            res.status(400).json({ ...error, message: error.message });
        });
};

const getOneProduct = (req, res) => {
    console.log("controller: getOneProduct", req.params);
    Product.findOne({ _id: req.params._id })
        .then((oneProduct) => {
            res.json({ product: oneProduct });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const updateProduct = (req, res) => {
    console.log("controller: updateProduct", req.params, req.body);
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => {
            res.json({ product: updatedProduct });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

const deleteProduct = (req, res) => {
    console.log("controller: deleteProduct", req.params);
    Product.deleteOne({ _id: req.params._id })
        .then((result) => {
            res.json({ dbResponse: result });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
};
