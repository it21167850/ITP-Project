const express = require("express");
const router = express.Router();

const SalaryController = require("../controllers/salary");

router.post("/", SalaryController.addSalary);

module.exports = router;
