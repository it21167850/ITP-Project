const mongoose = require('mongoose')

const addItemSchema = new mongoose.Schema({
  itemCode: { type: String, required: true },
  itemName: { type: String, required: true },
  date: { type: String, required: true },
  stockin: { type: String, required: true },
  stockout: { type: String, required: true },
  quantityInStock: { type: String, required: true }, // Add the property here
  reorderlevel: { type: String, required: true }
});
 module.exports = mongoose.model('addItem',addItemSchema);   