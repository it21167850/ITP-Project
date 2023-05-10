import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateEmp() {
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

  const navigate = useNavigate();

  function singleUser(e) {
    const { name, value } = e.target;
    setEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const { id: userID } = useParams();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/users/${userID}`
        );
        setEmployee(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [userID]);

  function updateData(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/users/${userID}`, employee)
      .then(() => {
        alert("Successfully updated!");
        navigate("/admindash/empdetails");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setEmployee((prevData) => ({
      ...prevData,
      image: base64,
    }));
  };
  return (
    <div className="container update_student">
      {/* <div className="update_student_pic">
        <img src={employee.image} />
      </div> */}
      <form className="update_form" onSubmit={updateData}>
        <div className="mb-3">
          <label htmlFor="stdName" className="form-label">
            Employee ID
          </label>
          <input
            type="text"
            className="form-control"
            id="stdempId"
            name="empId"
            placeholder="Employee ID"
            onChange={singleUser}
            value={employee.empId}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stdName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="stdName"
            name="fullName"
            placeholder="Enter Full Name"
            onChange={singleUser}
            value={employee.fullName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stdAddres" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="stdAddress"
            name="address"
            placeholder="Enter Address"
            onChange={singleUser}
            value={employee.address}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stdPhone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="stdPhone"
            name="phone"
            placeholder="Enter Phone"
            onChange={singleUser}
            value={employee.phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stdEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="stdEmail"
            name="email"
            placeholder="Enter Email"
            onChange={singleUser}
            value={employee.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stdPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="stdPassword"
            name="password"
            placeholder="Enter Password"
            onChange={singleUser}
            value={employee.password}
          />
        </div>

        <select value={employee.role} onChange={singleUser} name="role">
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
          <label htmlFor="stdImage" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="stdEmail"
            name="image"
            placeholder="Image.."
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
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
