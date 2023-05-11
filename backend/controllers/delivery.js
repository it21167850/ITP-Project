const Delivery = require("../models/delivery");

const addDelivery = async (req, res, next) => {
  const { oid, itemName, qty, price, email, address, mobile, date, status } =
    req.body;
  let delivery;

  try {
    delivery = new Delivery({
      oid,
      itemName,
      qty,
      price,
      email,
      address,
      mobile,
      date,
      status,
    });
    await delivery.save();
  } catch (err) {
    console.log(err);
  }

  if (!delivery) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ delivery });
};

const getAlldelivery = async (req, res) => {
  await Delivery.find()
    .then((delivery) => {
      res.json(delivery);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let delivery;
  try {
    delivery = await Delivery.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!delivery) {
    return res.status(404).json({ message: "No Order found found" });
  }
  return res.status(200).json({ delivery });
};
const updateDelivery = async (req, res, next) => {
  const id = req.params.id;
  const { oid, itemName, qty, price, email, address, mobile, date, status } =
    req.body;
  let delivery;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid delivery ID" });
  }

  try {
    delivery = await Delivery.findByIdAndUpdate(
      id,
      {
        oid,
        itemName,
        qty,
        price,
        email,
        address,
        mobile,
        date,
        status,
      },
      { new: true }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error updating delivery" });
  }

  if (!delivery) {
    return res.status(404).json({ message: "Delivery not found" });
  }

  return res.status(200).json({ delivery });
};

exports.addDelivery = addDelivery;
exports.getAlldelivery = getAlldelivery;
exports.getById = getById;
exports.updateDelivery = updateDelivery;
