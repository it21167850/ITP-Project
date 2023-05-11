const table = require("../models/tablebook-model");

const Addbooktable = async (req, res, next) => {
  const { name, date, time, Psize, Phone } = req.body;
  let booktable;

  try {
    booktable = new table({
      name,
      date,
      time,
      Psize,
      Phone,
    });
    await booktable.save();
  } catch (err) {
    console.log(err);
  }

  if (!booktable) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ booktable });
};
const getAllbooktable = async (req, res) => {
  await table
    .find()
    .then((table) => {
      res.json(table);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deletebooking = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await table.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "deleted successfull" });
};

// const  = async (req, res, next) => {
//   const id = req.params.id;
//   let book;
//   try {
//     book = await book.saveById(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!book) {
//     return res.status(404).json({ message: "NO Order found" });
//   }
//   return res.status(200).json({ book });
// };

const getbybookId = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await table.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No Order found found" });
  }
  return res.status(200).json({ book });
};

exports.Addbooktable = Addbooktable;
exports.getAllbooktable = getAllbooktable;
exports.deletebooking = deletebooking;
exports.getbybookId = getbybookId;
