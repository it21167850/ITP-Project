const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const Joi = require("joi");
// const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  empId: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  image: String,
});

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "7d",
//   });
//   return token;
// };

const User = mongoose.model("user", userSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     empId: Joi.string().required().label("Emp ID"),
//     fullName: Joi.string().required().label("Full Name"),
//     address: Joi.string().email().required().label("Address"),
//     password: passwordComplexity().required().label("Password"),
//     phone: Joi.string().phone().required().label("Phone"),
//     email: Joi.string().email().required().label("Email"),
//     role: Joi.string().email().required().label("Role"),
//     image: Joi.string().image().required().label("Image"),
//   });
//   return schema.validate(data);
// };

//  module.exports = { User, validate };
module.exports = User;
