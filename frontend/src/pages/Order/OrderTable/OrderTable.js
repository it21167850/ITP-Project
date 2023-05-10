import React from "react";
import "./OrderTable.css";
import { Button, Card, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

const OrderTable = () => {
  return (
    <div className="tbbackground ">
      <div>
        <Row>
          <Card className="booktblecard"></Card>
          <div className="tbl">
            <form>
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
                ></input>
              </div>

              <div className="wqasa"></div>
              <div class="col-12">
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
