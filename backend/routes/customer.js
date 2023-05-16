const express = require("express");
const router = express.Router();
const Customer = require("../models/signup");

router.get("/", async (req, res) => {
  try {
    // Get the customer data based on the email ID passed in the request
    const customer = await Customer.findOne({ email: req.query.email });

    if (!customer) {
      // If no customer found with the given email ID, return an error response
      return res.status(404).json({ message: "Customer not found" });
    }

    // If customer is found, return the customer data as a JSON response
    return res.json(customer);
  } catch (error) {
    console.error(error);
    // If any error occurred, send a 500 error response
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
