const moongose = require("mongoose");

const Schema = moongose.Schema;

const tracking = new Schema({
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

  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = moongose.model("tracking", tracking);
