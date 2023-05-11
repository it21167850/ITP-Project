const express = require("express");
const router = express.Router();
const SignupController = require("../controllers/signup");

router.post("/signup", SignupController.signup);

module.exports = router;
