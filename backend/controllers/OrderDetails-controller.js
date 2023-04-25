const item = require("../models/OrderDetails");

const addorderForm = async (req, res, next) => {
  const { image, Name, price, qty } = req.body;
  let Itemform;

  try {
    Itemform = new item({
      image,
      Name,
      price,
      qty,
    });
    await Itemform.save();
  } catch (err) {
    console.log(err);
  }

  if (!Itemform) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ Itemform });
};
const getAllItemDetails = async (req, res, next) => {
  let ItemDetails;
  try {
    ItemDetails = await item.find();
  } catch (err) {
    console.log(err);
  }

  if (!ItemDetails) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ ItemDetails });
};

exports.addorderForm = addorderForm;
exports.getAllItemDetails = getAllItemDetails;
