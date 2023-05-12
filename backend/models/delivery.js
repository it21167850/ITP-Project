const moongose = require("mongoose");

const Schema = moongose.Schema;

const delivery = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new ObjectId(), // Generate a new ObjectId
  },
  oid: {
    type: String,
    required: true,
    unique: true,
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
  },
});

module.exports = moongose.model("delivery", delivery);
