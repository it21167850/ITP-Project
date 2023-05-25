import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, FloatingLabel, Form, Row, Table } from "react-bootstrap";
import Att from "./Attendance.module.css";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
const AttendanceTable = () => {
  const { _id } = useParams();
  const [attendance, setAttendance] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [empId, setEmpId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchAtt = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/attendance/");
        if (!response.ok) {
          throw new Error("Failed to fetch Attendance");
        }
        const json = await response.json();
        setAttendance(json);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch Users");
        }
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAtt();
    fetchUsers();
  }, []);

  function deleteEmp(id) {
    axios
      .delete(`http://localhost:5000/api/attendance/${id}`)
      .then(() => {
        // alert("Delete Successfully");
        // setdeletebtn((prev)=>!prev)

        const newrecords = attendance.filter((el) => el._id !== id);
        setAttendance(newrecords);
        toast.success("Attendance deleted successfully");
        // navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log("hello "+id);
  }
  function onchange(e) {
    const { name, value } = e.target;
    if (name === "empId") {
      setEmpId(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "status") {
      setStatus(value);
    }
  }

  function submit(e) {
    e.preventDefault();

    // Check if the entered empId already exists in users table
    const isEmpIdExists = users.some((user) => user.empId === empId);

    if (!isEmpIdExists) {
      toast.error("Employee ID does not exist in the users table.");
      return;
    }

    // Check if there is already an attendance record for the empId and date
    const isRecordExists = attendance.some(
      (record) => record.empId === empId && record.date === date
    );

    if (isRecordExists) {
      toast.error(
        "Attendance record already exists for the selected employee and date."
      );
      return;
    }

    // Create a new attendance object with input field values
    const newAttendance = {
      empId: empId,
      date: date,
      status: status,
    };

    axios
      .post("http://localhost:5000/api/attendance/", newAttendance)
      .then(() => {
        toast.success("Details Added Successfully!");
        // Clear the input fields after successful submission
        setEmpId("");
        setDate("");
        setStatus("");
        setAttendance((prevAttendance) => [...prevAttendance, newAttendance]);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add details.");
      });
  }

  //###########################################################///////////////////////////////////////////////
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
    <div className={Att.main}>
      <div>
        <Link to="/admindash">
          <Button className={Att.back}>Back</Button>
        </Link>
      </div>
      <div>
        <ToastContainer />
      </div>
      <h1>Attendance Form</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Emp ID</StyledTableCell>

              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(attendance) &&
              attendance.map((attendance) => (
                <StyledTableRow key={attendance._id}>
                  <StyledTableCell align="center">
                    {attendance.empId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {attendance.date}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {attendance.status}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteEmp(attendance._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={Att.form}>
        <Form onSubmit={submit}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Enter Emp ID">
                <Form.Control
                  type="text"
                  placeholder="Enter Emp ID"
                  name="empId"
                  onChange={onchange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInputGrid" label="Enter Date">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  name="date"
                  onChange={onchange}
                />
              </FloatingLabel>
            </Col>
            <br></br>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Attendance Status"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  name="status"
                  onChange={onchange}
                >
                  <option value="">choose</option>
                  <option value="Present" style={{ color: "green" }}>
                    Present
                  </option>
                  <option value="Absent" style={{ color: "red" }}>
                    Absent
                  </option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>

          <br></br>

          <Button type="submit">Submit form</Button>
        </Form>
      </div>
    </div>
  );
};

export default AttendanceTable;
