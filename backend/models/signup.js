const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String,
  image: String,
});

const Customer = mongoose.model("customer", signupSchema);

module.exports = Customer;
