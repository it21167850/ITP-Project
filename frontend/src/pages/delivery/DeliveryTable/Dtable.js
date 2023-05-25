import React, { useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { Link, json, useParams } from "react-router-dom";
import Dta from "./Dtable.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
function Dtable() {
  //const { _id } = useParams();
  const [Delivery, setDelivery] = useState("");
  const [radioValue, setRadioValue] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [shortBy, setShortBy] = useState("all");

  // const [oid, setOid] = useState("");
  // const [itemName, setItemName] = useState("");
  // const [qty, setQty] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  // const [status, setStatus] = useState("");
  const radios = [
    { name: "All", value: "all" },
    { name: "complete", value: "complete" },
    { name: "Pending", value: "pending" },
    { name: "out of delivery", value: "out of delivery" },
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
      body: JSON.stringify({ status: "Complete" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setDelivery((orders) =>
      orders.map((order) => (order.id === data.id ? data : order))
    );
    toast.success("Order Complete !");
    window.location.reload();
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
    toast.error("Order In Progress !");
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

  // ################### /////////
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <div className={Dta.body}>
        <Link to="/admindash">
          <Button>Back</Button>
        </Link>
        <div>
          <ToastContainer />
        </div>
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
            <Button
              variant="outlined"
              onClick={() => setSearchTerm("")}
              color="success"
            >
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
        <div>
          <div className={Dta.fill}>
            <h4>Filter By Stutus</h4>
            <ButtonGroup className={Dta.btn}>
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Order ID</StyledTableCell>
                  <StyledTableCell align="center">Item Name</StyledTableCell>
                  <StyledTableCell align="center">Qty</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Phone</StyledTableCell>
                  <StyledTableCell align="center">Date</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Delivery &&
                  Delivery.filter((data) => {
                    if (searchTerm && !data.oid.includes(searchTerm)) {
                      return false;
                    }
                    if (filterValue === "all") {
                      return true;
                    }
                    if (filterValue === "complete") {
                      return data.status === "Complete";
                    }
                    if (filterValue === "pending") {
                      return data.status === "In Progress";
                    }
                    if (filterValue === "out of delivery") {
                      return data.status === "Out of Delivery";
                    }
                    return true; // Add this line
                  })
                    .filter(filterByDate)
                    .map((data) => (
                      <StyledTableRow key={data._id}>
                        <StyledTableCell align="center">
                          {data.oid}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.itemName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.qty}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.price}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.address}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.mobile}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.date}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {data.status}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleConfirm(data._id)}
                          >
                            Complete
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleProgress(data._id)}
                          >
                            In Progress
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Dtable;
