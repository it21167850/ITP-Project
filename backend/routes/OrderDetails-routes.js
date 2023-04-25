const express = require("express");

const router4 = express.Router();

const OrderformController = require("../controllers/OrderDetails-controller");

router4.post("/", OrderformController.addorderForm);
router4.get("/", OrderformController.getAllItemDetails);
module.exports = router4;
