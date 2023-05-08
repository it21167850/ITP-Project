import React from "react";
import "./payment.css";
import { Card, CardContent, Typography } from "@mui/material";
import { Button, Row } from "react-bootstrap";

const payment = () => {
  return (
    <div className="background">
      <Row>
        <Card className="paymentbox">
          <CardContent>
            <Typography gutterBottom>Your payment</Typography>
            <Typography variant="h4" component="div">
              RS: 500 /=
            </Typography>
          </CardContent>
        </Card>
      </Row>
      <div className="al1">
        <div className="row">
          <div className="col-12 mt-4">
            <div className="card p-3">
              <p className="mb-0 fw-bold h4">
                Payment Methods <div className="visacard"></div>
              </p>
            </div>
          </div>
          <br />
          <br />
          <form>
            <div className="row">
              <div className="col-12">
                <div className="form__div">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" "
                  ></input>
                  <label for="" className="form__label">
                    Card Number
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form__div">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" "
                  ></input>
                  <label for="" className="form__label">
                    MM / yy
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div className="form__div">
                  <input
                    type="password"
                    className="form-control"
                    placeholder=" "
                  ></input>
                  <label for="" class="form__label">
                    cvv code
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="form__div">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" "
                  ></input>
                  <label for="" className="form__label">
                    name on the card
                  </label>
                </div>
              </div>
              <div className="col-12">
                <div className="ordersbmtbtn">
                  <h3 className="ordersbmttext">SUBMIT</h3>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Button>make payment</Button>
    </div>
  );
};

export default payment;
