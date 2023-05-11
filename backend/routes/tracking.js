const express = require("express");
const router = express.Router();

const trackingController = require("../controllers/tracking");

router.post("/", trackingController.addTracking);
router.get("/", trackingController.getAlltracking);
module.exports = router;
