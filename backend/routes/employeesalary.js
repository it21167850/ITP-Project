const express = require("express");
const router = express.Router();

const salaryController = require("../controllers/employeesalary");

router.post("/", salaryController.addDelivery);
router.get("/", salaryController.getAlldelivery);
router.get("/:id", salaryController.getByorderId);
router.get("/:id", salaryController.getById);
router.put("/:id", salaryController.updateDelivery);
router.delete("/:id", salaryController.deleteDelivery);
module.exports = router;
