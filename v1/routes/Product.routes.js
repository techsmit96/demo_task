const express = require("express");
const productController = require("../controllers/Product.controller");
const router = express.Router();

router.post("/add-product", productController.addProduct);
router.get("/get-product", productController.getProduct);

module.exports = router;