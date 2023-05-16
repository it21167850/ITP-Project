import React, { useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Det from "./EmpDetails.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import jsPdf from "jspdf";
import "jspdf-autotable";
import logo from "../../../images/logo.png";

const EmpDetails = () => {
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

    const headers = [["Emp ID", "Role"]];

    const data = employee.map((thing) => [thing.empId, thing.role]);

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
      <table className={Det.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Emp ID</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>

            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employee
            .filter((thing) => {
              return search
                ? thing.fullName.toLowerCase().includes(search.toLowerCase())
                : true;
            })
            .map((thing) => (
              <tr key={thing._id}>
                <td className="table_data">
                  <img
                    className={Det.image}
                    src={thing.image}
                    alt="Profile Picture"
                  />
                </td>
                <td className="table_data">{thing.empId}</td>
                <td className="table_data">{thing.fullName}</td>
                <td className="table_data">{thing.address}</td>
                <td className="table_data">{thing.phone}</td>
                <td className="table_data">{thing.email}</td>

                <td className="table_data">{thing.role}</td>
                <td className="table_data btns">
                  <div className="operations">
                    <Link to={`/admindash/updateemp/${thing._id}`}>
                      <button className="btn_primary">Edit</button>
                    </Link>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        deleteEmp(thing._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  {/* /update?id=<% thing._id%> 
                            
                            */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EmpDetails;
