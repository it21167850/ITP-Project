const Fooditem = require("../models/foodItem");

const getAllfoodItems = async (req, res, next) => {
  let fooditems;
  try {
    fooditems = await Fooditem.find();
  } catch (err) {
    console.log(err);
  }

  if (!fooditems) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ fooditems });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let fooditems;
  try {
    fooditems = await Fooditem.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!fooditems) {
    return res.status(404).json({ message: "No food item found found" });
  }
  return res.status(200).json({ fooditems });
};

const addFooditem = async (req, res, next) => {
  const { name, category, description, price, country, image, offer } =
    req.body;
  let fooditem;

  try {
    fooditem = new Fooditem({
      name,
      category,
      description,
      price,
      country,
      image,
      offer,
    });
    await fooditem.save();
  } catch (err) {
    console.log(err);
  }

  if (!fooditem) {
    return res.staus(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ fooditem });
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

exports.getAllfoodItems = getAllfoodItems;
exports.getById = getById;
exports.addFooditem = addFooditem;
exports.updateFoodItem = updateFoodItem;
exports.deleteFoodItem = deleteFoodItem;
