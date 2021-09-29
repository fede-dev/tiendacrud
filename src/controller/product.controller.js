const { productModel } = require("../model");

const productController = {
  getAllProducts: (req, res, next) => {
    res.json({ products: productModel.getProducts() });
  },

  getProductByName: async (req, res, next) => {
    const productName = await productModel.getProductByName(req.query.name);
    if (productName) {
      res.json({ products: productName });
    } else {
      res.json("No se encontró el product");
    }
  },

  getProductById: async (req, res, next) => {
    const productId = await productModel.getProductById(req.params.id);
    if (productId) {
      res.json({ products: productId });
    }
    res.json("No se encontró el product con ID");
  },
};

module.exports = productController;
