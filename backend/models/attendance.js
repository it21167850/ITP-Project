const moongose = require("mongoose");

const Schema = moongose.Schema;

const attendance = new Schema({
  empId: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = moongose.model("attendance", attendance);
