const {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/products.controller");

const express = require("express");

const router = express.Router();

router.post("/new", createProduct);
router.get("/", getAllProducts);
router.get("/:_id", getOneProduct);
router.put("/update/:_id", updateProduct);
router.delete("/:_id", deleteProduct);

module.exports = {
    productsRouter: router,
};
