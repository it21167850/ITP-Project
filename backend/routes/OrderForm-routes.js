const express = require("express");

const router3 = express.Router();

const OrderformController = require("../controllers/OrderForm-controller");

router3.post("/", OrderformController.AddorderForm);
router3.get("/", OrderformController.getAllorders);
router3.put("/:id", OrderformController.updateOrder);
router3.get("/:id", OrderformController.getorderId);
module.exports = router3;
