import React, { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import Dta from "./Dtable.module.css";
function Dtable() {
  const { _id } = useParams();
  const [Delivery, setDelivery] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "All", value: "1" },
    { name: "Deliverd", value: "2" },
    { name: "Pending", value: "3" },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/delivery/");
      const json = await response.json();
      if (response.ok) {
        setDelivery(json);
      }
    };
    fetchUsers();
  }, [_id]);

  const handleConfirm = async (orderId) => {
    const response = await fetch(`/api/delivery/${orderId}`, {
      method: "PUT",
      body: JSON.stringify({ Status: "Complete" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDelivery((orders) =>
      orders.map((order) => (order.id === data.id ? data : order))
    );
  };
  return (
    <>
      <h2>DELIVERY ORDER DETAILS</h2>
      <div className={Dta.search}>
        <InputGroup className="m-3">
          <InputGroup.Text id="basic-addon1"></InputGroup.Text>
          <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          <Button variant="success">Search</Button>
        </InputGroup>
      </div>
      <Dropdown className={Dta.drop}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Short By Value
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Week</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={Dta.filtter}>
        <h4>Filter By Stutus</h4>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>OID</th>
            <th>ItemName</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Stutus</th>
          </tr>
        </thead>
        <tbody>
          {Delivery &&
            Delivery.map((data, index) => (
              <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.oid}</td>
                <td>{data.itemName}</td>
                <td>{data.qty}</td>
                <td>{data.price}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
                <td>{data.mobile}</td>
                <td>{data.date}</td>
                <td>{data.status}</td>
                <td>
                  {data.status === "In progress" && (
                    <Button
                      variant="success"
                      id={Dta.btncon}
                      onClick={() => handleConfirm(data._id)}
                    >
                      Confirm
                    </Button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default Dtable;
