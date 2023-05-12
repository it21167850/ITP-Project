import React from "react";
//import { Link } from "react-router-dom";
import Odash from "./OrderDash.module.css";
import { Button } from "react-bootstrap";
const OrderDash = () => {
  return (
    <div className={Odash.body}>
      <h2>Order Management</h2>
      <div className={Odash.btn}>
        <Button>Booked table</Button>
        <Button>Order Details</Button>
      </div>
    </div>
  );
};

export default OrderDash;
