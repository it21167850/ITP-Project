const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const additemdetails = new Schema({
  image: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  qty: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("AddItemdetails", additemdetails);
