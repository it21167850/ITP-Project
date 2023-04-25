const order = require("../models/OrderForm");

const AddorderForm = async (req, res, next) => {
  const { Name, Address, Phone, email } = req.body;
  let OrderForm;

  try {
    OrderForm = new order({
      Name,
      Address,
      Phone,
      email,
    });
    await OrderForm.save();
  } catch (err) {
    console.log(err);
  }

  if (!OrderForm) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ OrderForm });
};

exports.AddorderForm = AddorderForm;
