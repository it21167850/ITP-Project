import React from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import "./OrderForm.css";

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
                    <Form.Control type="text" placeholder=" S.M. Kasun" />
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
                    />
                    <Form.Text className="text-muted">
                      Enter Your dilivery address.
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="071-XXXXXXXX" />
                    <Form.Text className="text-muted">
                      Enter your phone number.
                    </Form.Text>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="example@gmail.com"
                    />
                    <Form.Text className="text-muted">
                      Enter your email
                    </Form.Text>
                  </Form.Group>
                </Row>
              </Form>
            </Card>
          </Row>
          <Button>submit</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
