import React from "react";
import { Form, Row } from "react-bootstrap";
import "./Addorderitem.css";
import {} from "react-bootstrap";
// import { Form } from "react-router-dom";

const Addorderitem = () => {
  return (
    <div>
      <div className="left">
        <Row>
          <div className="b1">
            {" "}
            <h1 className="txt">Add Order Item </h1>
          </div>
          <div className="b2">
            <Form>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter Image</Form.Label>
                  <Form.Control type="text" placeholder=" item" />
                  <Form.Text className="text-muted">Enter Item</Form.Text>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Pizza" />
                  <Form.Text className="text-muted">Enter Item Name</Form.Text>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Qty</Form.Label>
                  <Form.Control type="number" placeholder="1" />
                  <Form.Text className="text-muted">Enter quantity</Form.Text>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" placeholder="example@gmail.com" />
                  <Form.Text className="text-muted">Enter Price</Form.Text>
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Addorderitem;
