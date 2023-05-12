import React, { useEffect, useState } from "react";
import "./Recept.css";
import { Button, Card, Row } from "react-bootstrap";
import axios from "axios";

const Recept = ({ orderId }) => {
  const [books, setBooks] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/OrderForm/${orderId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const json = await response.json();
        setBooks([json]); // Use an array to store the single order
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchBooks();
  }, [orderId]);

  return (
    <div className="recept1">
      <div></div>
      <div className="invoice">
        <Card className="crd">
          <div>
            <h1 className="inovicetext">Invoice</h1>
            <h1 className="inovicetext">NS Resturant</h1>
            <h6 className="invoicetext1">Phone: 041-7812821X</h6>
          </div>
          <div>
            <table className="rdetailtable">
              <thead className="eadsamitha">
                <tr>
                  <th scope="col">Food</th>
                  <th scope="col">total</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((data) => (
                    <tr key={data.orderId}>
                      <td>{data.orderedfood}</td>
                      <td>{data.total}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Recept;
