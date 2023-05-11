const order = require("../models/OrderForm");

const AddorderForm = async (req, res, next) => {
  const { orderedfood, name, Address, Phone, email, total } = req.body;
  let OrderForm;

  try {
    OrderForm = new order({
      orderedfood,

      name,
      Address,
      Phone,
      email,
      total,
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
  const { orderedfood, name, Address, Phone, email, total } = req.body;
  let orders;

  try {
    orders = await order.findByIdAndUpdate(id, {
      orderedfood,

      name,
      Address,
      Phone,
      email,
      total,
    });
    orders = await orders.save();
  } catch (err) {
    console.log(err);
  }

  if (!orders) {
    return res.status(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ orders });
};

const getorderId = async (req, res, next) => {
  const id = req.params.id;
  let book1;
  try {
    book1 = await order.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book1) {
    return res.status(404).json({ message: "No Order111 found found" });
  }
  return res.status(200).json({ book1 });
};

exports.AddorderForm = AddorderForm;
exports.getAllorders = getAllorders;
exports.updateOrder = updateOrder;
exports.getorderId = getorderId;
