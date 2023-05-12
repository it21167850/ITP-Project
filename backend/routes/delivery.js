const express = require("express");
const router = express.Router();

const deliveryController = require("../controllers/delivery");

router.post("/", deliveryController.addDelivery);
router.get("/", deliveryController.getAlldelivery);
router.get("/get/:id", deliveryController.getByorderId);
router.get("/:id", deliveryController.getById);
router.put("/:id", deliveryController.updateDelivery);
router.delete("/:id", deliveryController.deleteDelivery);
module.exports = router;
