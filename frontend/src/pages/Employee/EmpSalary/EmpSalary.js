import axios from "axios";
import React, { useState, useEffect } from "react";
import Sal from "./EmpSalary.module.css";
//import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function EmployeeSalary() {
  const [Employeename, setEmployeename] = useState("");
  const [EmployeeSalary, setEmployeeSalary] = useState("");
  const [EmployeeID, setEmployeeID] = useState("");
  const [OT, setOT] = useState("");
  const [Salary, setSalary] = useState([]);
  const [filteredproduct, setFilteredproduct] = useState([]);
  const [searchinput, setSearchinput] = useState("");
  const [productlist, setProductlist] = useState();

  //   useEffect(() => {
  //     (async () =>
  //       axios.get("/api/employeesalary").then((res) => {
  //         setSalary(res.data);
  //         setProductlist(res.data);
  //       }))();
  //   }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:5000/api/salary/");
      const json = await response.json();
      if (response.ok) {
        setSalary(json);
        setProductlist(json);
      }
    };
    fetchUsers();
  }, []);

  //   const Handlesubmit = () => {
  //     axios
  //       .post("/api/employeesalary", {
  //         Employeename,
  //         EmployeeSalary,
  //         EmployeeID,
  //         OT,
  //       })
  //       .then((res) => {
  //         setSalary([
  //           ...Salary,
  //           {
  //             Employeename,
  //             EmployeeSalary,
  //             EmployeeID,
  //             OT,
  //           },
  //         ]);
  //         console.log(res);
  //         window.location.reload();
  //       });
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    const newSal = {
      Employeename,
      EmployeeSalary,
      EmployeeID,
      OT,
    };
    axios
      .post("http://localhost:5000/api/salary/", newSal)
      .then(() => {
        alert("Salary Added Successfully !");
        setEmployeename(" ");
        setEmployeename(" ");
        setEmployeeID(" ");
        setOT(" ");
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  //   const Delete = (id) => {
  //     axios.delete(`/api/employeesalary/${id}`).then((res) => {
  //       window.location.reload();
  //     });
  //   };
  async function handleDelete(id) {
    try {
      alert("Delete it");
      await axios.delete(`http://localhost:5000/api/salary/${id}`);
      toast.error("Deleted Salary details");
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Error Occurred ");
    }
  }

  const searchItems = (searchValue) => {
    setSearchinput(searchValue);
    if (searchinput !== "") {
      const filteredData = productlist.filter((list) => {
        return Object.values(list.Employeename)
          .join("")
          .toLowerCase()
          .includes(searchinput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredproduct(filteredData);
    } else {
      setFilteredproduct(productlist);
    }
  };

  return (
    <div className={Sal.main}>
      <div>
        <Link to="/admindash">
          <Button>Back</Button>
        </Link>
      </div>
      <div>
        <ToastContainer />
      </div>
      <h2 className={Sal.titles}>Calculate Employee's Salary</h2>
      <div className={Sal.container}>
        <div className={Sal.left}>
          <div>
            <table className={Sal.table}>
              <thead>
                <tr>
                  <th>EmployeeID</th>
                  <th>Employeename</th>
                  <th>EmployeeSalary </th>
                  <th>OT</th>
                  <th>Total Salary</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {searchinput.length > 1
                  ? filteredproduct.map((EmpSalary) => {
                      return (
                        <tr>
                          <td> {EmpSalary.EmployeeID}</td>
                          <th>{EmpSalary.Employeename}</th>
                          <td> ${EmpSalary.EmployeeSalary}</td>
                          <td> ${EmpSalary.OT}</td>
                          <td>${EmpSalary.OT + EmpSalary.EmployeeSalary}</td>

                          <td>
                            <button
                              type="button"
                              class={Sal.del}
                              onClick={() => handleDelete(EmpSalary._id)}
                            >
                              {" "}
                              Delete
                            </button>{" "}
                          </td>
                          <td>
                            {" "}
                            <a
                              type="button"
                              class={Sal.up}
                              href={`/admindash/edtsalary/${EmpSalary._id}`}
                            >
                              Update
                            </a>
                          </td>
                        </tr>
                      );
                    })
                  : Salary?.map((EmpSalary) => (
                      <tr>
                        <td> {EmpSalary.EmployeeID}</td>
                        <th>{EmpSalary.Employeename}</th>
                        <td> ${EmpSalary.EmployeeSalary}</td>
                        <td> ${EmpSalary.OT}</td>
                        <td> ${EmpSalary.OT + EmpSalary.EmployeeSalary}</td>
                        <td>
                          <button
                            type="button"
                            class="admin-btn btn btn-light"
                            onClick={() => handleDelete(EmpSalary._id)}
                          >
                            {" "}
                            Delete
                          </button>{" "}
                        </td>
                        <td>
                          {" "}
                          <a
                            type="button"
                            class={Sal.admin}
                            href={`/admindash/edtsalary/${EmpSalary._id}`}
                          >
                            Update
                          </a>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={Sal.right}>
          <input
            className="home-input"
            type="search"
            placeholder="Search"
            onChange={(e) => searchItems(e.target.value)}
            name="searchitem"
          />
          <div className={Sal.form}>
            <p className={Sal.new}>Calculate Employee's Salary</p>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                onChange={(e) => {
                  setEmployeename(e.target.value);
                }}
                name="Employeename"
                placeholder="Employee Name"
              />
              <input
                type="number"
                onChange={(e) => {
                  setEmployeeSalary(e.target.value);
                }}
                name="EmployeeSalary"
                placeholder="Employee Salary"
              />
              <input
                type="text"
                onChange={(e) => {
                  setEmployeeID(e.target.value);
                }}
                name="EmployeeID"
                placeholder="Employee ID"
              />
              <input
                type="Number"
                onChange={(e) => {
                  setOT(e.target.value);
                }}
                name="OT"
                placeholder="OT"
              />
              <br></br>
              <button id="createbtn" type="submit" className={Sal.updatebtn}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeSalary;
