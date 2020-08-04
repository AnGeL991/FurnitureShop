const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/product.Controller");

router.get("/products", ProductsController.getAll);
router.post("/products", ProductsController.postOne);

module.exports = router;
