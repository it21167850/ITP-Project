import React from "react";
import { Button } from "react-bootstrap";
import "./CustomerDash.css";

const CustomerDash = () => {
  return (
    <div>
      <div className="qaz">
        <h2>Delivery Management</h2>
        <div className>
          <div>
            <Button>Menu</Button>
          </div>
          <div>
            <Button>Order Table</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDash;
