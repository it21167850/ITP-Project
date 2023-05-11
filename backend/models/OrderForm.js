const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addorderdetails = new Schema({
  orderedfood: {
    type: String,
  },
  total: {
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
