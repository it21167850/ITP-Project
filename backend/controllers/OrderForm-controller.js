const order = require("../models/OrderForm");

const AddorderForm = async (req, res, next) => {
  const { name, Address, Phone, email } = req.body;
  let OrderForm;

  try {
    OrderForm = new order({
      name,
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
const getAllorders = async (req, res) => {
  await order
    .find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.AddorderForm = AddorderForm;
exports.getAllorders = getAllorders;
