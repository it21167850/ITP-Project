const Employee = require("../models/user");

const addEmployee = async (req, res, next) => {
  const { empId, fullName, address, phone, email, password, role, image } =
    req.body;
  let employee;

  // Check if empId already exists in database
  const existingEmployeeById = await Employee.findOne({ empId: empId });
  if (existingEmployeeById) {
    return res.status(400).json({
      message:
        "Employee with the provided empId already exists in the database",
      errorType: "empId",
    });
  }

  // Check if email already exists in database
  const existingEmployeeByEmail = await Employee.findOne({ email: email });
  if (existingEmployeeByEmail) {
    return res.status(400).json({
      message:
        "Employee with the provided email already exists in the database",
      errorType: "email",
    });
  }

  try {
    employee = new Employee({
      empId,
      fullName,
      address,
      phone,
      email,
      password,
      role,
      image,
    });
    await employee.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "unable to add employee" });
  }

  if (!employee) {
    return res.status(500).json({ message: "unable to add employee" });
  }
  return res.status(201).json({ employee });
};

const getAllemployee = async (req, res) => {
  await Employee.find()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      console.log(err);
    });
};
const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(404).json({ message: "unable to delete by this id" });
  }
  return res.status(200).json("Employee successfully deleted");
};
const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  const { empId, fullName, address, phone, email, password, role, image } =
    req.body;
  let employee;

  try {
    employee = await Employee.findByIdAndUpdate(id, {
      empId,
      fullName,
      address,
      phone,
      email,
      password,
      role,
      image,
    });
    employee = await employee.save();
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ employee });
};
const getById = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!employee) {
    return res.status(404).json({ message: "No food item found found" });
  }
  return res.status(200).json({ employee });
};
exports.addEmployee = addEmployee;
exports.getAllemployee = getAllemployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;
exports.getById = getById;
