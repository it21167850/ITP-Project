const moongose = require("mongoose");

const Schema = moongose.Schema;

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  combinefoods: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image1: {
    type: String,
    required: true,
  },

  image2: {
    type: String,
    required: true,
  },

  image3: {
    type: String,
    required: true,
  },

  offer: {
    type: Number,
  },
});

module.exports = moongose.model("Package", packageSchema);
