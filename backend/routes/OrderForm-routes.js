const express = require("express");

const router3 = express.Router();

const OrderformController = require("../controllers/OrderForm-controller");

router3.post("/", OrderformController.AddorderForm);
router3.get("/", OrderformController.getAllorders);
module.exports = router3;
