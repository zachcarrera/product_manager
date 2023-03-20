const { createProduct } = require("../controllers/products.controller");

const express = require("express");

const router = express.Router();

router.post("/new", createProduct);
// router.get("/new", (req, res) => res.json({ message: "from router" }));

module.exports = {
    productsRouter: router,
};
