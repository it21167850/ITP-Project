import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DeliveryDash = () => {
  return (
    <div>
      <Link to="/deliverydash/dtable">
        <Button>Delivery Details</Button>
      </Link>
      <Link to="/deliverydash/tracking">
        <Button>Tracking Details</Button>
      </Link>
    </div>
  );
};

export default DeliveryDash;
