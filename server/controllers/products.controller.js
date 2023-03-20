const { Product } = require("../models/products.model");

const createProduct = (req, res) => {
    Product.create(req.body)
        .then((newlyCreatedProduct) => {
            res.json({ product: newlyCreatedProduct });
        })
        .catch((error) => {
            res.status(400).json({ ...error, message: error.message });
        });
};

module.exports = {
    createProduct,
};
