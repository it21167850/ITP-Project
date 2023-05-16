const Customer = require("../models/signup");

const getCustomerById = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Customer.findById(id);
    console.log(result);

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

module.exports = { getCustomerById };
