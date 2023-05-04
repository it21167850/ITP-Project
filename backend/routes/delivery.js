const express = require("express");
const router = express.Router();

const deliveryController = require("../controllers/delivery");

router.post("/", deliveryController.addDelivery);
router.get("/", deliveryController.getAlldelivery);
router.get("/:id", deliveryController.getById);
module.exports = router;
