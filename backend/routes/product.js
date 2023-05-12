const express = require("express");
const router = express.Router();
const { uploadProduct, getProducts } = require("../controllers/product");

router.post("/uploadProduct", uploadProduct);
router.get("/products", getProducts);

module.exports = router;
