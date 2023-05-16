const express = require("express");
const router = express.Router();
const Customer = require("../models/signup");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email: email });

    if (!customer) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (customer.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", customer });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
