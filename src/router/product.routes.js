const express = require("express");
const router = express.Router();
const { productController } = require("../controller");

router.get("/", productController.getAllProducts);
router.get("/name", productController.getProductByName);
router.put("/:id", productController.getProductById);

module.exports = router;
