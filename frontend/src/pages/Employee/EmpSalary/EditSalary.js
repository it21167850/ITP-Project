import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EdtSal from "./EmpSalary.module.css";

function EditSalary() {
  const [Employeename, setEmployeename] = useState("");
  const [EmployeeSalary, setEmployeeSalary] = useState("");
  const [EmployeeID, setEmployeeID] = useState("");
  const [OT, setOT] = useState("");
  const params = useParams();

  useEffect(() => {
    axios.get(`/api/salary/${params.id}`).then((res) => {
      setEmployeename(res.data.Employeename);
      setEmployeeSalary(res.data.EmployeeSalary);
      setEmployeeID(res.data.EmployeeID);
      setOT(res.data.OT);
    });
  });

  const changeOnClick = (e) => {
    axios
      .put(`/api/salary${params.id}`, {
        Employeename,
        EmployeeSalary,
        EmployeeID,
        OT,
      })
      .then((res) => {
        setEmployeename(res.data.Employeename);
        setEmployeeSalary(res.data.EmployeeSalary);
        setEmployeeID(res.data.EmployeeID);
        setOT(res.data.OT);
      });
  };

  return (
    <div className={EdtSal.container}>
      <a class="admin-btn btn btn-light" href="/admindash/empsalary">
        <button className="btn">Back</button>
      </a>
      <div id="edit">
        <form className={EdtSal.form2} onSubmit={changeOnClick}>
          <div className={EdtSal.fields}>
            {" "}
            <label htmlFor="">Employee Name</label>
            <input
              placeholder="Name"
              type="text"
              value={Employeename}
              onChange={(e) => setEmployeename(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="fields">
            <label htmlFor="">Employee Salary</label>
            <input
              placeholder="Category"
              value={EmployeeSalary}
              type="text"
              onChange={(e) => setEmployeeSalary(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="fields">
            <label htmlFor="">OT</label>
            <input
              placeholder="Category"
              value={OT}
              type="text"
              onChange={(e) => setOT(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="fields">
            <label htmlFor="">Employee ID</label>
            <input
              placeholder="Price"
              value={EmployeeID}
              type="text"
              onChange={(e) => setEmployeeID(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="update-btns">
            {" "}
            <button className="update-buttons" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSalary;
