import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CustomerHome() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/login").then((response) => {
      setCustomer(response.data);
    });
  }, []);

  return (
    <div>
      {customer && (
        <div>
          <h1>Welcome, {customer.name}!</h1>
          <img src={customer.photo} alt={customer.name} />
          <p>Email: {customer.email}</p>
          <p>Address: {customer.address}</p>
          {/* Render other customer information as needed */}
        </div>
      )}
    </div>
  );
}
