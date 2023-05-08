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
  const [Tracking, setTracking] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/delivery/");
      const json = await response.json();
      if (response.ok) {
        setTracking(json);
      }
    };
    fetchUsers();
  }, [_id]);
  return (
    <div>
      <Table striped bordered hover size="sm" className={Track.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>ItemName</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Date</th>
            <th>Stutus</th>
          </tr>
        </thead>
        <tbody>
          {Tracking &&
            Tracking.map((data, index) => (
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
            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Enter Order ID"
                >
                  <Form.Control type="oid" placeholder="@gmail.com" />
                </FloatingLabel>
              </Col>
              <Row />
              <br></br>
              <Col md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Order Stutus"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option value="1">Order Placed</option>
                    <option value="2">Order Confirmation</option>
                    <option value="3">Preparation</option>
                    <option value="4">Out of Delivery</option>
                    <option value="5">Complete</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
            <br></br>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button type="submit">Submit form</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default Tracking;
