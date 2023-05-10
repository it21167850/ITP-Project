import React, { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import Sal from "./EmpSalary.module.css";
import axios from "axios";
import { format } from "date-fns";
const EmpSalary = () => {
  const navigate = useNavigate();
  const [attendanceData, setAttendanceData] = useState([]);
  const currentDate = new Date().toLocaleDateString("en-GB");
  const [rate, setRate] = useState(""); // Daily rate
  const [month, setMonth] = useState(""); // Selected mont
  const [generatedSalary, setGeneratedSalary] = useState(0);
  const [salary, setSalary] = useState();
  const [salaryData, setSalaryData] = useState([]);
  // const [salary, setSalary] = React.useState({
  //   Month: "",
  //   Rate: "",
  // });

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/attendance/");
        if (!response.ok) {
          throw new Error("Failed to fetch Employees");
        }
        const json = await response.json();
        setAttendanceData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAttendance();
  }, []);

  function calculateSalary(dateCount, rate) {
    return dateCount * rate;
  }

  function onchange(e) {
    const { name, value } = e.target;
    if (name === "rate") {
      setRate(value);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Month</th>
            <th>Date Count</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <tr key={attendance.empId}>
              <td>{attendance.empId}</td>
              <td>{attendance.fullName}</td>
              <td>{attendance.role}</td>
              <td>{format(new Date(), "MMMM")}</td>

              <td>{attendance.status}</td>
              <td>{calculateSalary(attendance.status, rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className={Sal.addStudent_form}>
        <div className="mb-3">
          <label
            htmlFor="stdName"
            className="form-label"
            style={{ color: "black" }}
          >
            Rate
          </label>
          <input
            type="text"
            className="form-control"
            id="stdName"
            name="rate"
            placeholder="Enter daily Rate"
            onChange={onchange}
          />
        </div>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default EmpSalary;
