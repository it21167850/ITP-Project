import React, { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Det from "./EmpDetails.module.css";
import { Link, useNavigate } from "react-router-dom";
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

import jsPdf from "jspdf";
import "jspdf-autotable";
import logo from "../../../images/logo.png";

const EmpDetails = () => {
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

  const [employee, setEmployee] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const [deletebtn, setdeletebtn] = React.useState(false);
  const navigate = useNavigate();
  console.log(search);

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch Employees");
        }
        const json = await response.json();
        setEmployee(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmp();
  }, [deletebtn]);
  function deleteEmp(id) {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(() => {
        // alert("Delete Successfully");
        // setdeletebtn((prev)=>!prev)

        const newrecords = employee.filter((el) => el._id !== id);
        setEmployee(newrecords);
        toast.success("Employee deleted successfully");
        // navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log("hello "+id);
  }

  function generatePdf() {
    const unit = "pt";
    const size = "A4";
    const orientation = "portrait";

    const doc = new jsPdf(orientation, unit, size);
    const marginLeft = 40;

    const imagedata = logo;

    doc.setDrawColor(0); //set border color to black
    doc.setLineWidth(2); //set border width
    doc.roundedRect(
      20,
      20,
      doc.internal.pageSize.width - 40,
      doc.internal.pageSize.height - 40,
      10,
      10,
      "D"
    );

    doc.setFontSize(15);

    const title = "Employee details";

    const headers = [
      ["Emp ID", "Full Name", "Address", "Phone", "Email", "Role"],
    ];

    const data = employee.map((thing) => [
      thing.empId,
      thing.fullName,
      thing.address,
      thing.phone,
      thing.email,
      thing.role,
    ]);

    let content = {
      startY: 270,
      head: headers,
      body: data,
    };

    //const dateTime = 'Supplied date & Time : ' + new Date().toLocaleString();
    const end =
      "<<< This is auto generated report. All rights NS Restuarant >>>";

    const imageWidth = 200;
    const imageheight = 200;
    const imageX = (doc.internal.pageSize.width - imageWidth) / 2;
    const imageY = 30;

    doc.addImage(imagedata, "PNG", imageX, imageY, imageWidth, imageheight);
    doc.text(title, 80, 250, { fontSize: 50 });

    doc.autoTable(content);
    //doc.text(dateTime, marginLeft,100);
    doc.text(end, marginLeft, 810);

    doc.save("suppliers Report.pdf");
  }

  return (
    <div className={Det.main}>
      <div>
        <Link to="/admindash">
          <Button>Back</Button>
        </Link>
      </div>
      {/* <div className='animation'>
                <Lottie animationData={Animal}/>
            </div> */}
      <div className={Det.search}>
        <input
          type="text"
          name="search-input"
          placeholder="Search by Name.."
          onChange={(e) => setSearch(e.target.value)}
        />

        <span>No of Employees : {employee.length}</span>
        <Button
          variant="contained"
          color="success"
          aria-label="#"
          onClick={generatePdf}
        >
          {" "}
          Report
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="center">Emp ID</StyledTableCell>
              <StyledTableCell align="center">Full Name</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee
              .filter((row) => {
                return search
                  ? row.fullName.toLowerCase().includes(search.toLowerCase())
                  : true;
              })
              .map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell align="center">
                    <img
                      className={Det.image}
                      src={row.image}
                      alt="Profile Picture"
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.empId}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.fullName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.phone}</StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteEmp(row._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`/admindash/updateemp/${row._id}`}>
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

      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EmpDetails;
