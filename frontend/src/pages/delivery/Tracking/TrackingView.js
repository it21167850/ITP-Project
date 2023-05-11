import React, { useState } from "react";
import Track from "./TrackingView.module.css";
import { Button, Card, Col, FloatingLabel, Row, Form } from "react-bootstrap";
import axios from "axios";

const TrackingView = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [deliveryStatus, setDeliveryStatus] = useState("Order Placed");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const enteredOrderId = event.target.elements.orderId.value;

    try {
      // Make an API request to fetch the order details based on the entered order ID
      const orderIdResponse = await axios.get(
        `http://localhost:5000/api/order?orderId=${enteredOrderId}`
      ); // Replace API_URL with your API endpoint

      // Extract the _id value from the response data
      const order = orderIdResponse.data;

      if (order) {
        const orderId = order._id;

        // Now make the API request to fetch the delivery status based on the orderId
        const deliveryResponse = await axios.get(
          `http://localhost:5000/api/delivery/${orderId}`
        ); // Replace API_URL with your API endpoint

        // Extract the delivery status from the response data
        const orderStatus = deliveryResponse.data.deliveryStatus;

        // Update the deliveryStatus state and currentStep state
        setDeliveryStatus(orderStatus);

        switch (orderStatus) {
          case "Order Placed":
            setCurrentStep(1);
            break;
          case "Order Confirmation":
            setCurrentStep(2);
            break;
          case "Preparation":
            setCurrentStep(3);
            break;
          case "Out of Delivery":
            setCurrentStep(4);
            break;
          case "Complete":
            setCurrentStep(5);
            break;
          default:
            setCurrentStep(1);
            break;
        }
      }
    } catch (error) {
      console.error(error);
      // Handle error if the API request fails
    }
  };
  return (
    <div>
      <div className={Track.container}>
        <div className={Track.steps}>
          <span
            className={`${Track.circle} ${
              currentStep >= 1 && deliveryStatus === "Order Placed"
                ? "active"
                : ""
            }`}
          >
            Order
            <br />
            Placed
          </span>
          <span
            className={`${Track.circle} ${
              currentStep >= 2 && deliveryStatus === "Order Confirmation"
                ? "active"
                : ""
            }`}
          >
            Order <br />
            Preparation
          </span>
          <span
            className={`${Track.circle} ${
              currentStep >= 3 && deliveryStatus === "Preparation"
                ? "active"
                : ""
            }`}
          >
            Preparation
            <br />
          </span>
          <span
            className={`${Track.circle} ${
              currentStep >= 4 && deliveryStatus === "Out of Delivery"
                ? "active"
                : ""
            }`}
          >
            Out of
            <br />
            Delivery
          </span>
          <span
            className={`${Track.circle} ${
              currentStep >= 5 && deliveryStatus === "Complete" ? "active" : ""
            }`}
          >
            Complete
            <br />
          </span>
          <div className={Track.progress}>
            <span
              className={Track.indicator}
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
            ></span>
          </div>
        </div>
        <Card border="dark" className="card">
          <Card.Header>
            <h4>Update Order Details</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <br />
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
                        name="orderId"
                      />
                    </FloatingLabel>
                  </Col>
                </Row>

                <br />

                <Button type="submit">Submit form</Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TrackingView;
