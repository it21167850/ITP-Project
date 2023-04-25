import React from "react";
import "./Recept.css";
import { Button, Card } from "react-bootstrap";

const Recept = () => {
  return (
    <div>
      <div>
        <Card className="crd">
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
                      <img
                        src="https://i.imgur.com/tT8rjKC.jpg"
                        alt=""
                        width="50"
                      ></img>
                    </span>
                  </td>
                  <td>samitha</td>
                  <td>dhananjaya</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>
                    <span className="round">
                      <img
                        src="https://i.imgur.com/uIgDDDd.jpg"
                        alt=""
                        width="50"
                      ></img>
                    </span>
                  </td>
                  <td>samitha</td>
                  <td>dhananjaya</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>
                    <span className="round">
                      <img
                        src="https://i.imgur.com/cAdLHeY.jpg"
                        alt=""
                        width="50"
                      ></img>
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
              <div>
                {" "}
                <Button
                  style={{ backgroundColor: "red", width: "120px" }}
                  className="btn1"
                >
                  Cancel
                </Button>
              </div>
              <div>
                {" "}
                <Button
                  style={{ backgroundColor: "green", width: "120px" }}
                  className="btn2"
                >
                  Pay
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Recept;
