const Salary = require("../models/employeesalary");

const addDelivery = async (req, res, next) => {
  const { Employeename, EmployeeSalary, EmployeeID, OT } = req.body;
  let salary;

  try {
    salary = new Salary({
      Employeename,
      EmployeeSalary,
      EmployeeID,
      OT,
    });
    await salary.save();
  } catch (err) {
    console.log(err);
  }

  if (!salary) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ salary });
};

const getAlldelivery = async (req, res) => {
  await Salary.find()
    .then((salary) => {
      res.json(salary);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let salary;
  try {
    salary = await Salary.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!salary) {
    return res.status(404).json({ message: "No Order found" });
  }
  return res.status(200).json({ salary });
};

const getByorderId = async (req, res, next) => {
  const orderId = req.body.oid; // Assuming the order ID is sent in the request body

  try {
    const uniqueOids = await Salary.distinct("oid", { oid: orderId }); // Find unique oid values matching the provided orderId
    const deliveries = await Salary.find({ oid: { $in: uniqueOids } }); // Find all delivery documents with matching unique oid values
    if (!deliveries || deliveries.length === 0) {
      return res.status(404).json({ message: "No Orders found" });
    }
    return res.status(200).json({ deliveries });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const updateDelivery = async (req, res, next) => {
  const id = req.params.id;
  const { Employeename, EmployeeSalary, EmployeeID, OT } = req.body;
  let salary;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid delivery ID" });
  }

  try {
    salary = await Salary.findByIdAndUpdate(
      id,
      {
        Employeename,
        EmployeeSalary,
        EmployeeID,
        OT,
      },
      { new: true }
    );
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error updating delivery" });
  }

  if (!salary) {
    return res.status(404).json({ message: "Delivery not found" });
  }

  return res.status(200).json({ salary });
};
const deleteDelivery = async (req, res, next) => {
  const id = req.params.id;
  let salary;
  try {
    salary = await Salary.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!salary) {
    return res.status(404).json({ message: "unable to delete by this id" });
  }
  return res.status(200).json("successfully deleted");
};

exports.addDelivery = addDelivery;
exports.getAlldelivery = getAlldelivery;
exports.getById = getById;
exports.updateDelivery = updateDelivery;
exports.getByorderId = getByorderId;
exports.deleteDelivery = deleteDelivery;
