const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addorderdetails = new Schema({
  Name: {
    type: String,
    require: true,
  },
  Address: {
    type: String,
    require: true,
  },
  Phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("AddorderForm", addorderdetails);
