import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Orderdetailtable.css";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Orderdetailtable() {
  const { _id } = useParams();
  const [orders, setOrders] = useState("");
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

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
  const history = useNavigate();

  const deleteHandler = async (_id) => {
    await axios
      .delete("http://localhost:5000/OrderForm/" + _id)
      .then(() => {
        setRefresh(!refresh); // toggle refresh state variable
        history("/orderdash/orderdetails"); // navigate to table book page
        toast.success("Order deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="tblephoto">
        <div className="text123">Order Details</div>

        <Button
          variant="contained"
          color="success"
          aria-label="#"
          onClick={generatePdf}
        >
          {" "}
          Report
        </Button>

        <table
          className="orderdetailtable"
          style={{ border: "2px solid black", margin: "auto" }}
        >
          <thead className="table-header">
            <tr>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                #
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Name
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Phone
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Food Item & Quantity
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              ></th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              ></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((data, index) => (
                <tr key={data._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.Phone}</td>
                  <td>{data.orderedfood}</td>
                  <td>
                    {" "}
                    <input type="checkbox" />
                    Complete
                  </td>

                  <td>
                    <button
                      className="Detailsbtn Deletebtn"
                      onClick={() => deleteHandler(data._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Orderdetailtable;
