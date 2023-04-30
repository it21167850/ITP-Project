import React from "react";
import { Button, Table } from "react-bootstrap";
import Det from "./EmpDetails.module.css";
const EmpDetails = () => {
  return (
    <div className={Det.main}>
      <div className={Det.table}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Emp ID</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button variant="danger">Delete</Button>
                <Button variant="success">Update</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EmpDetails;
