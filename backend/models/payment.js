const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addpaymentSchema = new Schema({
  cardnumber: {
    type: String,
    require: true,
  },
  Edate: {
    type: String,
    require: true,
  },
  Cvv: {
    type: String,
    require: true,
  },
  Name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Addpayment", addpaymentSchema);
