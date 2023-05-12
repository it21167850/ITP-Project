const mongoose = require("mongoose");

const Salaryschema = new mongoose.Schema({
  Employeename: {
    type: String,
    required: true,
  },
  EmployeeSalary: {
    type: Number,
    required: true,
  },
  EmployeeID: {
    type: String,
    required: true,
  },
  OT: {
    type: Number,
    required: true,
  },
});

const employeesalary = mongoose.model("EmployeeSalary", Salaryschema);

module.exports = employeesalary;
