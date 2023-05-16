const express = require("express");
const router = express.Router();
const SignupController = require("../controllers/signup");

router.post("/signup", SignupController.signup);
router.get("/customer/:email", SignupController.getCustomerDetails); // New route

module.exports = router;
