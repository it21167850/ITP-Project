const express = require("express");
const router = express.Router();
const { uploadProduct, getProducts } = require("../controllers/product");

router.post("/uploadProduct", uploadProduct);
router.get("/getProducts", getProducts);

module.exports = router;
