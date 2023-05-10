const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addorderdetails = new Schema({
  total: {
    type: String,
    require: true,
  },
  orderedfood: {
    type: String,
    require: true,
  },
  qty: {
    type: String,
    require: true,
  },

  name: {
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
