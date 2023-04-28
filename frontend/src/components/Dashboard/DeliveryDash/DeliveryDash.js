import React from "react";
import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import Ddash from "./DeliveryDash.module.css";
const DeliveryDash = () => {
  return (
    <div className={Ddash.body}>
      <h2>Delivery Management</h2>
      <div className={Ddash.btn}>
        <Button>Attendance Info</Button>
        <Button>Salary Info</Button>
      </div>
    </div>
  );
};

export default DeliveryDash;
