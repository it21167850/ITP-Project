const express = require("express");
const router = express.Router();

const trackingController = require("../controllers/tracking");

router.post("/", trackingController.addTracking);

module.exports = router;
