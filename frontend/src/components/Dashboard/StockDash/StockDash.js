import React from "react";
import { Button } from "react-bootstrap";
import Sdash from "./StockDash.module.css";
const StockDash = () => {
  return (
    <div className={Sdash.body}>
      <h2>Stock Management</h2>
      <div className={Sdash.btn}>
        <Button>Attendance Info</Button>
        <Button>Salary Info</Button>
      </div>
    </div>
  );
};

export default StockDash;
