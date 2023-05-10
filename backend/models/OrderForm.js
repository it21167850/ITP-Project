const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addorderdetails = new Schema({
  total: {
    type: String,
  },
  orderedfood: {
    type: String,
  },
  qty: {
    type: String,
  },

  name: {
    type: String,
  },
  Address: {
    type: String,
  },
  Phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("AddorderForm", addorderdetails);
