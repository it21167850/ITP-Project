import React from "react";
import Mdash from "./MenuDash.module.css";
import { Button } from "react-bootstrap";
const MenuDash = () => {
  return (
    <div className={Mdash.body}>
      <h2>Menu Management</h2>
      <div className={Mdash.btn}>
        <Button>Attendance Info</Button>
        <Button>Salary Info</Button>
      </div>
    </div>
  );
};

export default MenuDash;
