import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Dta from "./Dtable.module.css";
function Dtable() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "All", value: "1" },
    { name: "Complete", value: "2" },
    { name: "Pending", value: "3" },
  ];

  return (
    <div>
      <div className={Dta.card}>
        <h2>DELIVERY ORDER DETAILS</h2>
        <div className={Dta.search}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <Button variant="success">Search</Button>{" "}
          </InputGroup>
        </div>
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
      <div className={Dta.filter}>
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
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>OID</th>
              <th>ItemName</th>
              <th>Price</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Stutus</th>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Progress</td>
            <td>
              <Button variant="success" id={Dta.deliver}>
                Complete
              </Button>
            </td>
          </tbody>
        </Table>
      </>
    </div>
  );
}

export default Dtable;
