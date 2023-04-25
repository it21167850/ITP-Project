const express = require("express");

const router2 = express.Router();

const Addpayment = require("../models/payment");
const PaymentController = require("../controllers/payment-controller");

router2.post("/", PaymentController.Addpayment);

module.exports = router2;
