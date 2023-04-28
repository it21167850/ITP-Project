import React from "react";
import { Button, Table } from "react-bootstrap";
import Form from "./AttendaceForm.module.css";
const AttendanceForm = () => {
  return (
    <div className={Form.main}>
      <div className={Form.table}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Emp ID</th>
              <th>Emp Name</th>
              <th>Role</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button variant="danger">Absent</Button>
                <Button variant="success">Present</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AttendanceForm;
