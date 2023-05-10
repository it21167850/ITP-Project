const express = require("express");
const router = express.Router();

const AttendanceController = require("../controllers/attendance");

router.post("/", AttendanceController.addAttendance);
router.get("/:id", AttendanceController.getById);
router.put("/:id", AttendanceController.updateAttendance);
router.get("/", AttendanceController.getAttendance);
module.exports = router;
