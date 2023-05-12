import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, FloatingLabel, Form, Row, Table } from "react-bootstrap";
import Att from "./Attendance.module.css";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AttendanceTable = () => {
  const { _id } = useParams();
  const [attendance, setAttendance] = useState([]);
  const [empid, setEmpid] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [updateStatusSuccess, setUpdateStatusSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);

  const currentDate = new Date().toLocaleDateString("en-GB");
  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/`);
        const json = await response.json();
        if (response.ok) {
          setAttendance(json);
        }
      } catch (error) {
        console.error("Error fetching tracking data:", error);
      }
    };

    fetchTrackingData();
  }, [searchTerm, attendance]);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Find the order by ID
    const orderToUpdate = attendance.find((data) => data.empId === empid);

    if (orderToUpdate) {
      // Update the status for the corresponding order
      const updatedOrder = { ...orderToUpdate, status: orderStatus };

      // Send the updated order data to the server
      try {
        const response = await axios.put(
          `http://localhost:5000/api/users/${orderToUpdate._id}`,
          updatedOrder
        );
        toast.success("Mark The Attendace !");
        if (response.status === 200) {
          // Update the tracking state with the updated order
          const updatedTracking = attendance.map((data) =>
            data.empId === empid ? response.data : data
          );

          setAttendance(updatedTracking);
          setUpdateStatusSuccess(true);
        }
      } catch (error) {
        console.error("Error updating status:", error);
      }
    } else {
      console.error("Employee not found");
    }
  };

  useEffect(() => {
    if (attendance.length > 0) {
      const filtered = attendance.filter((data) =>
        data.empId.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuppliers(filtered);
    }
  }, [searchTerm]);

  //console.log(filteredSuppliers);

  useEffect(() => {
    // Update status to "Not Marked" at the end of the day
    const updateStatusAtEndOfDay = () => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );

      if (now >= endOfDay) {
        const updatedTracking = attendance.map((data) => ({
          ...data,
          status: "Not Marked",
        }));

        setAttendance(updatedTracking);
      }
    };

    const interval = setInterval(updateStatusAtEndOfDay, 60000); // Check every minute

    return () => {
      clearInterval(interval);
    };
  }, [attendance]);

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
      <Table striped bordered hover size="sm" className={Att.table}>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance &&
            attendance.map((attendance) => (
              <tr key={attendance._id}>
                <td>{attendance.empId}</td>
                <td>{attendance.fullName}</td>
                <td>{attendance.role}</td>
                <td>{currentDate}</td>
                <td>{attendance.status}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className={Att.form}>
        <Form onSubmit={handleFormSubmit}>
          <Row className="g-2">
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Enter Order ID"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Order ID"
                  value={empid}
                  onChange={(e) => setEmpid(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Order Status"
              >
                <Form.Select
                  aria-label="Floating label select example"
                  value={orderStatus}
                  onChange={(e) => setOrderStatus(e.target.value)}
                >
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
