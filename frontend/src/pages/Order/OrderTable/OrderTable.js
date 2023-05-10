import React, { useState } from "react";
import "./OrderTable.css";
import { Button, Card, Row } from "react-bootstrap";
import { Form, useNavigate } from "react-router-dom";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { Checkbox } from "@mui/material";
import axios from "axios";

const OrderTable = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    date: "",
    time: "",
    Psize: "",
    Phone: "",
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
      .post("http://localhost:5000/tablebook", {
        name: String(inputs.name),
        date: String(inputs.date),
        time: String(inputs.time),
        Psize: Number(inputs.Psize),
        Phone: String(inputs.Phone),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => {
      history("/booktable");
      window.location.reload();
    });
  };

  return (
    <div className="tbbackground ">
      <div>
        <Row>
          <Card className="booktblecard"></Card>
          <div className="tbl">
            <form onSubmit={handleSubmit}>
              <div class="booktblname">
                <label for="validationDefault01" class="form-label">
                  <div>
                    <h className="tbltext1">Your Name</h>
                  </div>
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault01"
                  required
                  value={inputs.name}
                  onChange={handleChange}
                  name="name"
                ></input>
              </div>

              <div class="booktblname">
                <label for="validationDefault01" class="form-label">
                  <div className="tbltext1"> Date</div>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="validationDefault01"
                  required
                  value={inputs.date}
                  onChange={handleChange}
                  name="date"
                ></input>
              </div>
              <div class="booktblname">
                <label for="validationDefault01" class="form-label">
                  <div className="tbltext1">Time</div>
                </label>
                <input
                  type="time"
                  class="form-control"
                  id="validationDefault01"
                  required
                  value={inputs.time}
                  onChange={handleChange}
                  name="time"
                ></input>
              </div>
              <div class="booktblname">
                <label for="validationDefault01" class="form-label">
                  <div className="tbltext1"> Party Size</div>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  required
                  value={inputs.Psize}
                  onChange={handleChange}
                  name="Psize"
                ></input>
              </div>
              <div class="booktblname">
                <label for="validationDefault01" class="form-label">
                  <div className="tbltext1"> Phone Number</div>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationDefault01"
                  required
                  value={inputs.Phone}
                  onChange={handleChange}
                  name="Phone"
                ></input>
              </div>

              <div className="wqasa"></div>
              <div class="col-12">
                <FormCheckLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Available"
                />
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default OrderTable;
