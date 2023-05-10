const moongose = require("mongoose");

const Schema = moongose.Schema;

const attendance = new Schema({
  empId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  month: {
    type: String,
    required: true,
  },

  status: {
    type: Number,
    required: true,
  },
});

module.exports = moongose.model("attendance", attendance);
