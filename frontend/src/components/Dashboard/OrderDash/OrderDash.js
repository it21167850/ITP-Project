import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrderDash = () => {
  return (
    <div>
      <Link to="/payment">
        <Button>Order</Button>
      </Link>
    </div>
  );
};

export default OrderDash;
