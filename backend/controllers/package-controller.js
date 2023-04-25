const Package = require("../models/package");

const getAllpackages = async (req, res, next) => {
  let packages;
  try {
    packages = await Package.find();
  } catch (err) {
    console.log(err);
  }

  if (!packages) {
    return res.status(404).json({ message: "No product found" });
  }
  return res.status(200).json({ packages });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let package;
  try {
    package = await Package.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!package) {
    return res.status(404).json({ message: "No food item found found" });
  }
  return res.status(200).json({ package });
};

const addPackage = async (req, res, next) => {
  const {
    name,
    combinefoods,
    description,
    price,
    image1,
    image2,
    image3,
    offer,
  } = req.body;
  let package;

  try {
    package = new Package({
      name,
      combinefoods,
      description,
      price,
      image1,
      image2,
      image3,
      offer,
    });
    await package.save();
  } catch (err) {
    console.log(err);
  }

  if (!package) {
    return res.staus(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ package });
};

const deletePackage = async (req, res, next) => {
  const id = req.params.id;
  let package;
  try {
    package = await Package.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!package) {
    return res.status(404).json({ message: "unable to delete by this id" });
  }
  return res.status(200).json("Food item successfully deleted");
};

const updatePackage = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    combinefoods,
    description,
    price,
    image1,
    image2,
    image3,
    offer,
  } = req.body;
  let package;

  try {
    package = await Package.findByIdAndUpdate(id, {
      name,
      combinefoods,
      description,
      price,
      image1,
      image2,
      image3,
      offer,
    });
    package = await package.save();
  } catch (err) {
    console.log(err);
  }

  if (!package) {
    return res.staus(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ package });
};

exports.getById = getById;
exports.addPackage = addPackage;
exports.deletePackage = deletePackage;
exports.updatePackage = updatePackage;
exports.getAllpackages = getAllpackages;
