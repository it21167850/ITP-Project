const express = require("express");

const router3 = express.Router();

const AddorderForm = require("../models/OrderForm");
const OrderformController = require("../controllers/OrderForm-controller");

router3.post("/", OrderformController.AddorderForm);

module.exports = router3;
