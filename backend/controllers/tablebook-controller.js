const table = require("../models/tablebook-model");

const Addbooktable = async (req, res, next) => {
  const { name, date, time, Psize, Phone } = req.body;

  try {
    const existingTable = await table.findOne({ date: date, time: time });
    if (existingTable) {
      return res.status(400).json({
        message:
          "The selected date and time is already reserved. Please select a different date and/or time.",
      });
    }

    const booktable = new table({
      name,
      date,
      time,
      Psize,
      Phone,
    });

    await booktable.save();
    return res.status(201).json({ booktable });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add booking" });
  }
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
  return res.status(200).json({ message: "Deleted successfully" });
};

const getbybookId = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await table.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No Order found" });
  }
  return res.status(200).json({ book });
};

exports.Addbooktable = Addbooktable;
exports.getAllbooktable = getAllbooktable;
exports.deletebooking = deletebooking;
exports.getbybookId = getbybookId;
