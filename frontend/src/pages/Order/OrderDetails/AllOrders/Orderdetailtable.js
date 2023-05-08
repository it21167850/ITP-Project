import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Orderdetailtable() {
  const { _id } = useParams();
  const [orders, setOrders] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/OrderForm/");
      const json = await response.json();
      if (response.ok) {
        setOrders(json);
      }
    };
    fetchUsers();
  }, [_id]);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((data, index) => (
              <tr key={data._id}>
                <th scope="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.Phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orderdetailtable;
