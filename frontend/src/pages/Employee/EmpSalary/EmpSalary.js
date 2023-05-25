import axios from "axios";
import React, { useState, useEffect } from "react";
import Sal from "./EmpSalary.module.css";
//import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function EmployeeSalary() {
  const [Employeename, setEmployeename] = useState("");
  const [EmployeeSalary, setEmployeeSalary] = useState("");
  const [EmployeeID, setEmployeeID] = useState("");
  const [OT, setOT] = useState("");
  const [Salary, setSalary] = useState([]);
  const [filteredproduct, setFilteredproduct] = useState([]);
  const [searchinput, setSearchinput] = useState("");
  const [productlist, setProductlist] = useState();

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
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">EmployeeID</StyledTableCell>
                    <StyledTableCell align="center">
                      Employee Name
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Employee Salary
                    </StyledTableCell>
                    <StyledTableCell align="center">OT</StyledTableCell>
                    <StyledTableCell align="center">
                      Total Salary
                    </StyledTableCell>

                    <StyledTableCell align="center"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchinput.length > 1
                    ? filteredproduct.map((EmpSalary) => {
                        return (
                          <StyledTableRow key={EmpSalary._id}>
                            <StyledTableCell align="center">
                              {EmpSalary.EmployeeID}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {EmpSalary.Employeename}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {EmpSalary.EmployeeSalary}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {EmpSalary.OT}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {EmpSalary.OT + EmpSalary.EmployeeSalary}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <IconButton
                                aria-label="delete"
                                onClick={() => handleDelete(EmpSalary._id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                              <Link
                                to={`/admindash/edtsalary/${EmpSalary._id}`}
                              >
                                <IconButton aria-label="delete">
                                  <EditIcon />
                                </IconButton>
                              </Link>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                    : Salary?.map((EmpSalary) => (
                        <StyledTableRow key={EmpSalary._id}>
                          <StyledTableCell align="center">
                            {EmpSalary.EmployeeID}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {EmpSalary.Employeename}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {EmpSalary.EmployeeSalary}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {EmpSalary.OT}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {EmpSalary.OT + EmpSalary.EmployeeSalary}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleDelete(EmpSalary._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                            <Link to={`/admindash/edtsalary/${EmpSalary._id}`}>
                              <IconButton aria-label="delete">
                                <EditIcon />
                              </IconButton>
                            </Link>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
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

              <Button variant="contained" color="success" type="submit">
                Calculate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeSalary;
