import React from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import AddStudentAnimation from "../../../updateAnimation.json";
import Lottie from "lottie-react";
import Emp from "./EmpRegister.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
        toast.success("Employee Added Successfully!");
        navigate("/admindash");
      })
      .catch((err) => {
        alert(err);
      });
    console.log("im in submit");
  }

  return (
    <div className="Add_container container">
      <h1>Employee Registration</h1>
      <div>
        <ToastContainer />
      </div>
      <div className={Emp.lottie_animation}>
        <Lottie animationData={AddStudentAnimation} />
      </div>

      <Box
        component="form"
        className={Emp.form}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={submit}
      >
        <div>
          <TextField
            id="outlined-search"
            label="Employee Id"
            type="text"
            required
            inputProps={{ name: "empId" }}
            onChange={onchange}
          />

          <TextField
            id="outlined-search"
            label="Full Name"
            type="text"
            required
            inputProps={{ name: "fullName" }}
            onChange={onchange}
          />
          <br></br>
          <TextField
            id="outlined-search"
            label="Address"
            type="text"
            required
            inputProps={{ name: "address" }}
            onChange={onchange}
          />

          <TextField
            id="outlined-search"
            label="Phone"
            type="phone"
            required
            name="phone"
            inputProps={{ name: "phone" }}
            onChange={onchange}
          />
          <br></br>
          <TextField
            id="outlined-search"
            label="Email"
            type="email"
            required
            inputProps={{ name: "email" }}
            onChange={onchange}
          />
          <br></br>
          <TextField
            id="outlined-search"
            label="Password"
            type="password"
            required
            inputProps={{ name: "password" }}
            onChange={onchange}
          />
          <br></br>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Role</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Role"
              inputProps={{ name: "role" }}
              onChange={onchange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Customer Manager">Customer Manager</MenuItem>
              <MenuItem value="Employee Manager">Employee Manager</MenuItem>
              <MenuItem value="Menu Manager">Menu Manager</MenuItem>
              <MenuItem value="Order Manager">Order Manager</MenuItem>
              <MenuItem value="Delivery Manager">Delivery Manager</MenuItem>
              <MenuItem value="Stock Manager">Stock Manager</MenuItem>
              <MenuItem value="Supplier Manager">Supplier Manager</MenuItem>
              <MenuItem value="Financial Manager">Financial Manager</MenuItem>
            </Select>
          </FormControl>
          <br></br>
          <TextField
            id="outlined-search"
            type="file"
            required
            name="image"
            accept=".jpeg, .png, .jpg"
            inputProps={{ name: "image" }}
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
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
