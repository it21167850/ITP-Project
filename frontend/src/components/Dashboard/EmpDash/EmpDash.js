import React from "react";
import Edash from "./EmpDash.module.css";
import { Button } from "react-bootstrap";
const EmpDash = () => {
  return (
    <>
      <div className={Edash.body}>
        <h2>Employee Management</h2>
        <div className={Edash.btn}>
          <Button>Attendance Info</Button>
          <Button>Salary Info</Button>
        </div>
      </div>
    </>
  );
};

export default EmpDash;
