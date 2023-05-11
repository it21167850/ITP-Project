import React, { useEffect } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { FormControlLabel, Checkbox } from "@mui/material";
import "./OrderForm.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const OrderForm = () => {
  return (
    <div className="bn">
      <div>
        <div className="aa">
          <Row className="full">
            <div className="nn">
              <h className="txt">Order Details </h>
              <h className="txt">Form</h>
            </div>
            <Card className="c-o">
              <Form>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" S.M. Kasun"
                      // value={inputs.name}
                      // onChange={handleChange}
                      // name="name"
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter your phone number
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="42, Matara, Sri-Lanka"
                      // value={inputs.Address}
                      // onChange={handleChange}
                      // name="Address"
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter Your dilivery address.
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="071-XXXXXXXX"
                      // value={inputs.Phone}
                      // onChange={handleChange}
                      // name="Phone"
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter your phone number.
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="String"
                      placeholder="example@gmail.com"
                      // value={inputs.email}
                      // onChange={handleChange}
                      // name="email"
                      required
                    />
                    <Form.Text className="text-muted">
                      Enter your email
                    </Form.Text>
                  </Form.Group>
                </Row>

                <Button variant="contained" type="submit" className="orderbtn">
                  Sumbit
                </Button>
              </Form>
            </Card>
          </Row>
          {/* <Button type="submit">submit</Button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
