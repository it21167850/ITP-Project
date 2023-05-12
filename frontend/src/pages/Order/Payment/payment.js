import React, { useState } from "react";
import "./payment.css";
import {
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    cardnumber: "",
    Edate: "",
    Cvv: "",
    Name: "",
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
      .post("http://localhost:5000/payment/", {
        cardnumber: String(inputs.cardnumber),
        Edate: String(inputs.Edate),
        Cvv: String(inputs.Cvv),
        Name: String(inputs.Name),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.cardnumber.length > 16) {
      toast.error("Card number should be 16 digits long");
      return;
    }
    console.log(inputs, checked);
    sendRequest().then(() => {
      toast.success("Payment successful!");
      setTimeout(() => {
        window.location.reload();
      }, 3000); // wait for 3 seconds before reloading the page
    });
  };

  return (
    <div className="background">
      <Row>
        {/* <Card className="paymentbox">
          <CardContent>
            <Typography gutterBottom>Your payment</Typography>
            <Typography variant="h4" component="div">
              RS: 500 /=
            </Typography>
          </CardContent>
        </Card> */}
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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="form__div">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" "
                    value={inputs.cardnumber}
                    onChange={handleChange}
                    name="cardnumber"
                    required
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
                    value={inputs.Edate}
                    onChange={handleChange}
                    name="Edate"
                    required
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
                    value={inputs.Cvv}
                    onChange={handleChange}
                    name="Cvv"
                    required
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
                    value={inputs.Name}
                    onChange={handleChange}
                    name="Name"
                    required
                  ></input>
                  <label for="" className="form__label">
                    name on the card
                  </label>
                </div>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Confirm"
              />
              <div className="col-12">
                <div className="ordersbmtbtn">
                  <Button onClick={handleSubmit}>make payment</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Payment;
