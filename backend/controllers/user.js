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

const getAllorders = async (req, res) => {
  await order
    .find()
    .then((orders) => {
      res.json(orders);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addEmployee = addEmployee;
