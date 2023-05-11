import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Orderdetailtable.css";
import { Row } from "react-bootstrap";

function Orderdetailtable() {
  const { _id } = useParams();
  const [orders, setOrders] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/OrderForm/");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const json = await response.json();
        setOrders(json);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchOrders();
  }, [_id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Row>
        <div className="tblephoto">
          <div className="tblebox">
            <h1 className="newordertext">New Orders</h1>
          </div>
        </div>

        <table className="orderdetailtable">
          <thead className="theadsamitha">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((data, index) => (
                <tr key={data._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.Phone}</td>
                  <td>
                    <button className="Detailsbtn">Details</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Row>
    </div>
  );
}

export default Orderdetailtable;
