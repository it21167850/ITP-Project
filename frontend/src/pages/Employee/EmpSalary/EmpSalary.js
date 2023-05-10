import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Sal from "./EmpSalary.module.css";
import axios from "axios";
const EmpSalary = () => {
  const navigate = useNavigate();
  const [salary, setSalary] = React.useState({
    Month: "",
    Rate: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/", salary)
      .then(() => {
        alert("Salary Added!");
        //navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
    console.log("im in submit");
  }

  return (
    <div>
      <form className={Sal.addStudent_form} onSubmit={submit}>
        <div className="mb-3">
          <label
            htmlFor="stdID"
            className="form-label"
            style={{ color: "black" }}
          >
            Employee ID
          </label>
          <input
            type="text"
            className="form-control"
            id="stdID"
            name="empId"
            placeholder="Enter Employee ID"
            style={{ color: "black" }}
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="stdName"
            className="form-label"
            style={{ color: "black" }}
          >
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="stdName"
            name="fullName"
            placeholder="Enter Name"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="stdAddress"
            className="form-label"
            style={{ color: "black" }}
          >
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="stdAddress"
            name="address"
            placeholder="Enter Address "
            onChange={onchange}
          />
        </div>
      </form>
    </div>
  );
};

export default EmpSalary;
