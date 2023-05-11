const Attendance = require("../models/attendance");

const addAttendance = async (req, res, next) => {
  const { empId, name, role, month, status } = req.body;
  let attendance;

  try {
    attendance = new Attendance({
      empId,
      name,
      role,
      month,
      status,
    });
    await attendance.save();
  } catch (err) {
    console.log(err);
  }

  if (!attendance) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ attendance });
};
const getById = async (req, res, next) => {
  const id = req.params.id;
  let attendance;
  try {
    attendance = await Attendance.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!attendance) {
    return res.status(404).json({ message: "No Order found found" });
  }
  return res.status(200).json({ attendance });
};
const updateAttendance = async (req, res, next) => {
  const id = req.params.id;
  const { empId, name, role, month, status } = req.body;
  let attendance;

  try {
    attendance = await Attendance.findByIdAndUpdate(id, {
      empId,
      name,
      role,
      month,
      status,
    });
    delivery = await attendance.save();
  } catch (err) {
    console.log(err);
  }

  if (!attendance) {
    return res.status(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ attendance });
};
const getAttendance = async (req, res) => {
  await Attendance.find()
    .then((attendance) => {
      res.json(attendance);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addAttendance = addAttendance;
exports.getById = getById;
exports.updateAttendance = updateAttendance;
exports.getAttendance = getAttendance;
