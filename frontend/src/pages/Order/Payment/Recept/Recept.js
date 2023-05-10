import React from "react";
import "./Recept.css";
import { Button, Card, Row } from "react-bootstrap";

const Recept = () => {
  return (
    <div>
      <div></div>
      <div className="invoice">
        <Card className="crd">
          <div>
            <h1 className="inovicetext">Invoice</h1>
            <h1 className="inovicetext">NS Resturant</h1>
            <h6 className="invoicetext1">Phone: 041-7812821X</h6>
          </div>
          <div className="card">
            <table className="table table-hover earning-box">
              <thead>
                <tr>
                  <th className="hd"> </th>
                  <th className="hd">Food</th>
                  <th className="hd2">Quantity</th>
                  <th className="hd3">price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="round">
                      {/* <img
                        src="https://i.imgur.com/tT8rjKC.jpg"
                        alt=""
                        width="50"
                      ></img> */}
                    </span>
                  </td>
                  <td>samitha</td>
                  <td>dhananjaya</td>
                  <td>1000</td>
                </tr>

                <tr>
                  <td> </td>
                  <td></td>
                  <td>Total</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
            <div className="fbtn">
              <Row>
                {" "}
                <Button
                  style={{ backgroundColor: "green", width: "120px" }}
                  className="btn1"
                >
                  Payment
                </Button>{" "}
                <Button
                  style={{ backgroundColor: "red", width: "120px" }}
                  className="btn2"
                >
                  Cancel
                </Button>
              </Row>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Recept;
