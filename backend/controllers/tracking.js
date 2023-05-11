const Tracking = require("../models/tracking");

const addTracking = async (req, res, next) => {
  const { oid, itemName, qty, price, date, status } = req.body;
  let tracking;

  try {
    tracking = new Tracking({
      oid,
      itemName,
      qty,
      price,
      date,
      status,
    });
    await tracking.save();
  } catch (err) {
    console.log(err);
  }

  if (!tracking) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ tracking });
};
const getAlltracking = async (req, res) => {
  await Tracking.find()
    .then((traking) => {
      res.json(traking);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.addTracking = addTracking;
exports.getAlltracking = getAlltracking;
