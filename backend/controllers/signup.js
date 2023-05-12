const Customer = require("../models/signup");

const signup = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await Customer.findOne({ email: email });
    console.log(result);

    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = Customer(req.body);
      const save = await data.save();
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error", alert: false });
  }
};
const getCustomerDetails = async (req, res) => {
  const { email } = req.params;

  try {
    const result = await Customer.findOne({ email });
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "Customer not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
};

module.exports = { signup, getCustomerDetails };
