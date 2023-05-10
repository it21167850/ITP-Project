const Salary = require("../models/salary");
const addSalary = async (req, res, next) => {
  const { EmployeeId, EmployeeName, Month, Amount } = req.body;
  let salary;

  try {
    salary = new Salary({
      EmployeeId,
      EmployeeName,
      Month,
      Amount,
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

exports.addSalary = addSalary;
