import React, { useEffect } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import Det from "./EmpDetails.module.css";
import { Link, useNavigate } from "react-router-dom";
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

        // navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log("hello "+id);
  }
  return (
    <div className={Det.main}>
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
            <th>Password</th>
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
                <td className="table_data">{thing.password}</td>
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
    </div>
  );
};

export default EmpDetails;
