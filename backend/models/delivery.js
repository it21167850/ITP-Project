const moongose = require("mongoose");

const Schema = moongose.Schema;

const delivery = new Schema({
  oid: {
    type: String,
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },

  qty: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
  },

  address: {
    type: String,
  },

  mobile: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = moongose.model("delivery", delivery);
