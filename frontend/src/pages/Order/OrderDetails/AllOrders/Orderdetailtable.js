import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Orderdetailtable.css";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import jsPdf from "jspdf";
import "jspdf-autotable";
import logo from "../../../../images/logo.png";

function Orderdetailtable() {
  const { _id } = useParams();
  const [orders, setOrders] = useState("");
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/OrderForm/");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const json = await response.json();
        setOrders(json);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchOrders();
  }, [_id]);
  const history = useNavigate();

  const deleteHandler = async (_id) => {
    await axios
      .delete("http://localhost:5000/OrderForm/" + _id)
      .then(() => {
        setRefresh(!refresh); // toggle refresh state variable
        history("/orderdash/orderdetails"); // navigate to table book page
        toast.success("Order deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function generatePdf() {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const doc = new jsPdf(orientation, unit, size);
    const marginLeft = 40;

    const imagedata = logo;

    doc.setDrawColor(0);
    doc.setLineWidth(2);
    doc.roundedRect(
      20,
      20,
      doc.internal.pageSize.width - 40,
      doc.internal.pageSize.height - 40,
      10,
      10,
      "D"
    );

    doc.setFontSize(15);

    const title = "Orders";

    const headers = [["Name", "Phone", "Ordered Food"]];

    const data =
      orders &&
      orders.map((data, index) => [data.name, data.Phone, data.orderedfood]);

    let content = {
      startY: 270,
      head: headers,
      body: data,
    };

    //const dateTime = 'Supplied date & Time : ' + new Date().toLocaleString();
    const end =
      "<<< This is auto generated report. All rights NS Restuarant >>>";

    const imageWidth = 200;
    const imageheight = 200;
    const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
    const imageY = 30;

    doc.addImage(imagedata, "PNG", imageX, imageY, imageWidth, imageheight);
    doc.text(title, 80, 250, { fontSize: 50 });

    doc.autoTable(content);
    //doc.text(dateTime, marginLeft,100);
    doc.text(end, marginLeft, 810);

    doc.save("Order details Report.pdf");
  }

  return (
    <div>
      <div className="tblephoto">
        <div className="text123">Order Details</div>

        <Button
          variant="contained"
          color="success"
          aria-label="#"
          onClick={generatePdf}
        >
          {" "}
          Report
        </Button>

        <table
          className="orderdetailtable"
          style={{ border: "2px solid black", margin: "auto" }}
        >
          <thead className="table-header">
            <tr>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                #
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Name
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Phone
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              >
                Food Item & Quantity
              </th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              ></th>
              <th
                style={{ border: "1px solid black", padding: "8px" }}
                scope="col"
              ></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((data, index) => (
                <tr key={data._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.Phone}</td>
                  <td>{data.orderedfood}</td>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) => setIsChecked(e.target.checked)}
                    />
                  </td>

                  <td>
                    <button
                      className="Detailsbtn Deletebtn"
                      onClick={() => {
                        if (isChecked) {
                          deleteHandler(data._id);
                        }
                      }}
                      disabled={!isChecked}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Orderdetailtable;
