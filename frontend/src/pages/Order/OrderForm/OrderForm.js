import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { FormControlLabel, Checkbox } from "@mui/material";
import "./OrderForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const OrderForm = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    Address: "",
    Phone: "",
    email: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/OrderForm/", {
        name: String(inputs.name),
        Address: String(inputs.Address),
        Phone: String(inputs.Phone),
        email: Number(inputs.email),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/OrderForm"));
  };

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
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=" S.M. Kasun"
                      value={inputs.name}
                      onChange={handleChange}
                      name="name"
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
                      value={inputs.Address}
                      onChange={handleChange}
                      name="Address"
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
                      value={inputs.Phone}
                      onChange={handleChange}
                      name="Phone"
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
                      value={inputs.email}
                      onChange={handleChange}
                      name="email"
                    />
                    <Form.Text className="text-muted">
                      Enter your email
                    </Form.Text>
                  </Form.Group>
                </Row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Available"
                />
                <Button variant="contained" type="submit">
                  Add Book
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
