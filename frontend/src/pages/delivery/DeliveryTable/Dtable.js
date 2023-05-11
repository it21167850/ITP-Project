import React, { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, json, useParams } from "react-router-dom";
import Dta from "./Dtable.module.css";

function Dtable() {
  //const { _id } = useParams();
  const [Delivery, setDelivery] = useState("");
  const [radioValue, setRadioValue] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [shortBy, setShortBy] = useState("all");

  const [oid, setOid] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const radios = [
    { name: "All", value: "all" },
    { name: "confirm", value: "confirm" },
    { name: "Pending", value: "pending" },
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
  }, []);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const newTrack = {
  //     oid,
  //     itemName,
  //     qty,
  //     price,
  //     date,
  //     status,
  //   };
  //   axios.post("http://localhost:5000/api/tracking/").then(() => {
  //     alert("new data added !");
  //     setOid(""),
  //       setItemName(""),
  //       setQty(""),
  //       setPrice(""),
  //       setDate(""),
  //       setStatus("");
  //   });
  // };

  const handleConfirm = async (orderId) => {
    const response = await fetch(`/api/delivery/${orderId}`, {
      method: "PUT",
      body: JSON.stringify({ status: "Confirm" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data); // Debugging statement
    console.log(data.price);
    // Check if the required fields are present in the data object
    if (data.oid && data.itemName && data.qty && data.price && data.date) {
      // Save confirmed order data to another schema
      const confirmedOrder = {
        oid: data.oid,
        itemName: data.itemName,
        qty: data.qty,
        price: data.price,
        date: data.date,
        status: "Place The Order", // Assuming the status should be set as "Confirmed" for the tracking record
      };

      try {
        const confirmedOrderResponse = await fetch(
          "http://localhost:5000/api/tracking/",
          {
            method: "POST",
            body: JSON.stringify(confirmedOrder),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const confirmedOrderData = await confirmedOrderResponse.json();

        setDelivery(
          (orders) =>
            orders.map((order) => (order.id === data.orderId ? data : order)) // Fix: changed data.id to data.orderId
        );

        // Alert the user that the data has been inserted
        alert("Data inserted!");
        console.log(confirmedOrderData);
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error("Required fields are missing in the data object.");
    }
  };

  const handleProgress = async (orderId) => {
    const response = await fetch(`/api/delivery/${orderId}`, {
      method: "PUT",
      body: JSON.stringify({ status: "In Progress" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDelivery((orders) =>
      orders.map((order) => (order.id === data.id ? data : order))
    );
    window.location.reload();
  };
  const filterByDate = (order) => {
    if (shortBy === "all") return true;
    if (shortBy === "today") {
      const today = new Date().toISOString().slice(0, 10);
      return order.date === today;
    }
    if (shortBy === "week") {
      const today = new Date();
      const lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      )
        .toISOString()
        .slice(0, 10);
      return (
        order.date >= lastWeek && order.date <= today.toISOString().slice(0, 10)
      );
    }
  };

  return (
    <>
      <div className={Dta.body}>
        <h2 className={Dta.del}>DELIVERY ORDER DETAILS</h2>
        <div className={Dta.search}>
          <InputGroup className="m-3">
            <InputGroup.Text id="basic-addon1"></InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="success" onClick={() => setSearchTerm("")}>
              Search
            </Button>
          </InputGroup>
        </div>
        <Dropdown className={Dta.drop}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Short By Date
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setShortBy("all")}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setShortBy("today")}>
              Today
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setShortBy("week")}>
              Last Week
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className={Dta.filtter}>
          <h4>Filter By Stutus</h4>
          <ButtonGroup>
            {radios.map((radio) => (
              <ToggleButton
                key={radio.value}
                id={`radio-${radio.value}`}
                type="radio"
                variant={
                  radioValue === radio.value ? "success" : "outline-secondary"
                }
                name="radio"
                value={radio.value}
                checked={filterValue === radio.value}
                onChange={(e) => setFilterValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div className={Dta.table}>
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
                Delivery.filter((data) => {
                  if (searchTerm && !data.oid.includes(searchTerm)) {
                    return false;
                  }
                  if (filterValue === "all") {
                    return true;
                  }
                  if (filterValue === "confirm") {
                    return data.status === "Confirm";
                  }
                  if (filterValue === "pending") {
                    return data.status === "In Progress";
                  }
                  return true; // Add this line
                })
                  .filter(filterByDate)
                  .map((data, index) => (
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
                        <Button
                          variant="success"
                          id={Dta.btncon}
                          onClick={() => handleConfirm(data._id)}
                        >
                          Confirm
                        </Button>

                        <Button
                          variant="danger"
                          onClick={() => handleProgress(data._id)}
                        >
                          In Progress
                        </Button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dtable;
