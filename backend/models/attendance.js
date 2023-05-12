const moongose = require("mongoose");

const Schema = moongose.Schema;

const attendance = new Schema({
  empId: {
    type: String,
  },

  name: {
    type: String,
  },

  role: {
    type: String,
  },

  month: {
    type: String,
  },

  status: {
    type: Number,
  },
});

module.exports = moongose.model("attendance", attendance);
