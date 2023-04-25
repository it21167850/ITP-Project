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
const getAllorders = async (req, res, next) => {
  let fooditems;
  try {
    fooditems = await ownmeal.find();
  } catch (err) {
    console.log(err);
  }

  if (!fooditems) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ fooditems });
};

const updateFoodItem = async (req, res, next) => {
  const id = req.params.id;
  const { name, category, description, price, country, image, offer } =
    req.body;
  let fooditem;

  try {
    fooditem = await Fooditem.findByIdAndUpdate(id, {
      name,
      category,
      description,
      price,
      country,
      image,
      offer,
    });
    fooditem = await fooditem.save();
  } catch (err) {
    console.log(err);
  }

  if (!fooditem) {
    return res.staus(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ fooditem });
};

const deleteFoodItem = async (req, res, next) => {
  const id = req.params.id;
  let fooditem;
  try {
    fooditem = await Fooditem.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!fooditem) {
    return res.status(404).json({ message: "unable to delete by this id" });
  }
  return res.status(200).json("Food item successfully deleted");
};

exports.AddorderForm = AddorderForm;
exports.getAllorders = getAllorders;
