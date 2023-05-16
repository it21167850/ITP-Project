const Product = require("../models/product");

const uploadProduct = async (req, res) => {
  const product = new Product(req.body);
  const savedProduct = await product.save();
  console.log(savedProduct);
  res.send({ message: "Upload successfully" });
};

const getProducts = async (req, res) => {
  const data = await Product.find({});
  const productsByCategory = {};
  data.forEach((product) => {
    if (!productsByCategory[product.category]) {
      productsByCategory[product.category] = [];
    }
    productsByCategory[product.category].push(product);
  });
  res.send(productsByCategory);
};

module.exports = { uploadProduct, getProducts };
