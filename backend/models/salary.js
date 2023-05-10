const mongoose = require("mongoose");

const Salaryschema = new mongoose.Schema({
  EmployeeId: {
    type: String,
    required: true,
  },
  EmployeeName: {
    type: String,
    required: true,
  },
  Month: {
    type: String,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
});

const employeesalary = mongoose.model("EmployeeSalary", Salaryschema);

module.exports = employeesalary;
