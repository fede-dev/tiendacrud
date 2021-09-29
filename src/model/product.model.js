//getProducts es lo que te trae todos los products
const fs = require("fs");
const path = require("path");

const getProducts = () => {
  const products = fs.readFileSync(path.join(__dirname, "./tienda.json"), {
    encoding: "utf-8",
  });
  return JSON.parse(products);
};

const findProductByQuery = (name) =>
  getProducts().find((item) => item.Nombre.includes(name));
const findProductById = (id) => getProducts().find((item) => item.EAN == id);

const getProductByName = (name) => findProductByQuery(name);
const getProductById = (id) => findProductById(id);

module.exports = {
  getProducts,
  getProductByName,
  getProductById,
};
