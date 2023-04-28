import React from "react";

//import { Link } from 'react-router-dom'
import Sdash from "./SupplierDash.module.css";
import { Button } from "react-bootstrap";
const SupplierDash = () => {
  return (
    <div className={Sdash.body}>
      <h2>Supplier Management</h2>
      <div className={Sdash.btn}>
        <Button>Attendance Info</Button>
        <Button>Salary Info</Button>
      </div>
    </div>
  );
};

export default SupplierDash;
