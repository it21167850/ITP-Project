import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Track from "./Tracking.module.css";
import { useParams } from "react-router-dom";
function Tracking() {
  const { _id } = useParams();
  const [tracking, setTracking] = useState([]);
  const [orderID, setOrderID] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [updateStatusSuccess, setUpdateStatusSuccess] = useState(false);

  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/delivery/`);
        const json = await response.json();
        if (response.ok) {
          setTracking(json);
        }
      } catch (error) {
        console.error("Error fetching tracking data:", error);
      }
    };

    fetchTrackingData();
  }, [_id]);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Find the order by ID
    const orderToUpdate = tracking.find((data) => data.oid === orderID);

    if (orderToUpdate) {
      // Update the status for the corresponding order
      const updatedOrder = { ...orderToUpdate, status: orderStatus };

      // Save the updated order data
      try {
        const response = await fetch(
          `http://localhost:5000/api/delivery/${orderToUpdate._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedOrder),
          }
        );

        if (response.ok) {
          // Update the tracking state with the updated order
          const updatedTracking = tracking.map((data) =>
            data.oid === orderID ? updatedOrder : data
          );

          setTracking(updatedTracking);
          setUpdateStatusSuccess(true);
        }
      } catch (error) {
        console.error("Error updating status:", error);
      }
    } else {
      console.error("Order not found");
    }
  };

  return (
    <div>
      <div>
        {/* ...existing JSX code... */}

        {updateStatusSuccess && (
          <div className="success-message">Status updated successfully!</div>
        )}
      </div>
      <Table striped bordered hover size="sm" className={Track.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>ItemName</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tracking &&
            tracking.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.oid}</td>
                <td>{data.itemName}</td>
                <td>{data.qty}</td>
                <td>{data.price}</td>
                <td>{data.date}</td>
                <td>{data.status}</td>
                <td>
                  <Button variant="success">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <br></br>

      <Card border="dark" className={Track.card}>
        <Card.Header>
          <h4>Update Order Details</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <br></br>
            <Form onSubmit={handleFormSubmit}>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter Order ID"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter Order ID"
                      value={orderID}
                      onChange={(e) => setOrderID(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Order Status"
                  >
                    <Form.Select
                      aria-label="Floating label select example"
                      value={orderStatus}
                      onChange={(e) => setOrderStatus(e.target.value)}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Order Confirmation">
                        Order Confirmation
                      </option>
                      <option value="Preparation">Preparation</option>
                      <option value="Out of Delivery">Out of Delivery</option>
                      <option value="Complete">Complete</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>

              <br></br>

              <Button type="submit">Submit form</Button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>

      <br />
    </div>
  );
}

export default Tracking;
