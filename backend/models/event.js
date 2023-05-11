const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  image: String,
  startDate: Date,
  startTime: Date,
  endDate: Date,
  endTime: Date,
  description: String,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
