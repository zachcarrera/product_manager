const {
    createProduct,
    getAllProducts,
    getOneProduct,
} = require("../controllers/products.controller");

const express = require("express");

const router = express.Router();

router.post("/new", createProduct);
router.get("/", getAllProducts);
router.get("/:_id", getOneProduct);

module.exports = {
    productsRouter: router,
};
