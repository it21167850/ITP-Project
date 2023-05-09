import React from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import AddStudentAnimation from "../../../updateAnimation.json";
import Lottie from "lottie-react";
import Emp from "./EmpRegister.module.css";
export default function EmpRegister() {
  const navigate = useNavigate();
  const [employee, setEmployee] = React.useState({
    empId: "",
    fullName: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });

  console.log(employee);

  function onchange(e) {
    setEmployee((prevData) => {
      const { name, value } = e.target;
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setEmployee({ ...employee, image: base64 });
  };

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/", employee)
      .then(() => {
        alert("Employee Added!");
        //navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
    console.log("im in submit");
  }

  return (
    <div className="Add_container container">
      <div className={Emp.lottie_animation}>
        <Lottie animationData={AddStudentAnimation} />
      </div>

      <form className={Emp.addStudent_form} onSubmit={submit}>
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
        <div className="mb-3">
          <label
            htmlFor="stdPhone"
            className="form-label"
            style={{ color: "black" }}
          >
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="stdPhone"
            name="phone"
            placeholder="Enter Phone Number"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="stdEmail"
            className="form-label"
            style={{ color: "black" }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="stdEmail"
            name="email"
            placeholder="Enter Unique email"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="stdPassword"
            className="form-label"
            style={{ color: "black" }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="stdPassword"
            name="password"
            placeholder="Enter Password"
            onChange={onchange}
          />
        </div>
        <select value={employee.role} onChange={onchange} name="role">
          <option value="">Select Role</option>
          <option value="Customer Manager">Customer Manager</option>
          <option value="Employee Manager">Employee Manager</option>
          <option value="Menu Manager">Menu Manager</option>
          <option value="Order Manager">Order Manager</option>
          <option value="Delivery Manager">Delivery Manager</option>
          <option value="Stock Manager">Stock Manager</option>
          <option value="Supplier Manager">Supplier Manager</option>
          <option value="Financial Manager">Financial Manager</option>
        </select>

        <div className="mb-3">
          <label
            htmlFor="stdImage"
            className="form-label"
            style={{ color: "black" }}
          >
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="stImage"
            name="image"
            placeholder="Image.."
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ color: "black" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
  });
}
