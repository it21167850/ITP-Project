const order = require("../models/OrderForm");

const AddorderForm = async (req, res, next) => {
  const { total, orderedfood, qty, name, Address, Phone, email } = req.body;
  let OrderForm;

  try {
    OrderForm = new order({
      total,
      orderedfood,
      qty,
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

const updateOrder = async (req, res, next) => {
  const id = req.params.id;
  const { total, orderedfood, qty, name, Address, Phone, email } = req.body;
  let orders;

  try {
    orders = await order.findByIdAndUpdate(id, {
      total,
      orderedfood,
      qty,
      name,
      Address,
      Phone,
      email,
    });
    orders = await orders.save();
  } catch (err) {
    console.log(err);
  }

  if (!orders) {
    return res.staus(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ delivery });
};

exports.AddorderForm = AddorderForm;
exports.getAllorders = getAllorders;
exports.updateOrder = updateOrder;
