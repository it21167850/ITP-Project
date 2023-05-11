const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addbooktable = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  Psize: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Addbooktable", addbooktable);
