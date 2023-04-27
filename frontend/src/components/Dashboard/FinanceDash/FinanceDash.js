import React from "react";
import Fdash from "./FinanceDash.module.css";
import { Button } from "react-bootstrap";
const FinanceDash = () => {
  return (
    <div className={Fdash.body}>
      <h2>Finance Management</h2>
      <div className={Fdash.btn}>
        <Button>Attendance Info</Button>
        <Button>Salary Info</Button>
      </div>
    </div>
  );
};

export default FinanceDash;
