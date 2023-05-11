const express = require("express");
const router = express.Router();
const {
  uploadEvent,
  getEventData,
  deleteEvent,
  updateEvent,
} = require("../controllers/event");

router.post("/uploadEvent", uploadEvent);
router.get("/getEventData", getEventData);
router.post("/deleteEvent", deleteEvent);
router.put("/updateEvent/:id", updateEvent);

module.exports = router;
