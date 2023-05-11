const Supplier = require("../models/Supplier");

const getAllSuppliers = async (req, res, next) => {
  let suppliers;
  try {
    suppliers = await Supplier.find();
  } catch (err) {
    console.log(err);
  }

  if (!suppliers) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ suppliers });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let supplier;
  try {
    supplier = await Supplier.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!supplier) {
    return res.status(404).json({ message: "No Supplier found" });
  }
  return res.status(200).json({ supplier });
};

const addSupplier = async (req, res, next) => {
  const { sup_ID, sup_Name, product_ID, product_Name, unit_price, quantity } =
    req.body;

  // Check if sup_ID already exists in the database
  const existingSupplier = await Supplier.findOne({ sup_ID });

  if (existingSupplier) {
    return res
      .status(400)
      .json({ message: "Supplier with this ID already exists" });
  }

  let supplier;
  try {
    supplier = new Supplier({
      sup_ID,
      sup_Name,
      product_ID,
      product_Name,
      unit_price,
      quantity,
    });
    await supplier.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add supplier" });
  }

  if (!supplier) {
    return res.status(500).json({ message: "Unable to add supplier" });
  }
  return res.status(201).json({ supplier });
};

const updateSupplier = async (req, res, next) => {
  const id = req.params.id;
  const { sup_ID, sup_Name, product_ID, product_Name, unit_price, quantity } =
    req.body;
  let supplier;
  try {
    supplier = await Supplier.findByIdAndUpdate(id, {
      sup_ID,
      sup_Name,
      product_ID,
      product_Name,
      unit_price,
      quantity,
    });
    supplier = await supplier.save();
  } catch (err) {
    console.log(err);
  }
  if (!supplier) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ supplier });
};

const deleteSupplier = async (req, res, next) => {
  const id = req.params.id;
  let supplier;
  try {
    supplier = await Supplier.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!supplier) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllSuppliers = getAllSuppliers;
exports.addSupplier = addSupplier;
exports.getById = getById;
exports.updateSupplier = updateSupplier;
exports.deleteSupplier = deleteSupplier;
