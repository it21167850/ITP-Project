import React, { useState, useRef, useEffect } from "react";
import Adash from "./AdminDash.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminDash = () => {
  const [showBox, setShowBox] = useState({});
  const boxRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event, id) => {
      if (boxRefs.current[id] && !boxRefs.current[id].contains(event.target)) {
        setShowBox((prevState) => ({ ...prevState, [id]: false }));
      }
    };

    document.addEventListener("mousedown", (event) => {
      Object.keys(showBox).forEach((id) => handleClickOutside(event, id));
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBox]);

  const handleButtonClick = (id) => {
    setShowBox((prevState) => ({ ...prevState, [id]: true }));
  };

  return (
    <div className={Adash.body}>
      <h2>Admin Dashboard</h2>
      <div className={Adash.btn}>
        <Button onClick={() => handleButtonClick("customer")}>
          Customer Management
        </Button>
        <Button onClick={() => handleButtonClick("employee")}>
          Employee Management
        </Button>
        <Button onClick={() => handleButtonClick("menu")}>
          Menu Management
        </Button>
        <Button onClick={() => handleButtonClick("order")}>
          Order Management
        </Button>
        <Button onClick={() => handleButtonClick("delivery")}>
          Delivery Management
        </Button>
        <Button onClick={() => handleButtonClick("stock")}>
          Stock Management
        </Button>
        <Button onClick={() => handleButtonClick("supplier")}>
          Supplier Management
        </Button>
        <Button onClick={() => handleButtonClick("finance")}>
          Financial Management
        </Button>
      </div>
      {showBox["customer"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["customer"] = el)}
        >
          <p>
            This is the attendance box that appears when the customer Info
            button is clicked.
          </p>
        </div>
      )}
      {showBox["employee"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["employee"] = el)}
        >
          {" "}
          <Link to="/admindash/empregister">
            <Button>Emp Registration</Button>
          </Link>
          <Button>Attendance Form</Button>
          <Button>Employee Details</Button>
          <Button>Salary</Button>
          <Button>Attendance Report</Button>
          <Button>Salary Report</Button>
        </div>
      )}
      {showBox["menu"] && (
        <div className={Adash.box} ref={(el) => (boxRefs.current["menu"] = el)}>
          <p>
            This is the salary box that appears when the Salary Info button is
            clicked.
          </p>
        </div>
      )}
      {showBox["order"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["order"] = el)}
        >
          <p>
            This is the salary box that appears when the Salary Info button is
            clicked.
          </p>
        </div>
      )}
      {showBox["delivery"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["delivery"] = el)}
        >
          <p>
            This is the salary box that appears when the Salary Info button is
            clicked.
          </p>
        </div>
      )}
      {showBox["stock"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["stock"] = el)}
        >
          <p>
            This is the salary box that appears when the Salary Info button is
            clicked.
          </p>
        </div>
      )}
      {showBox["supplier"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["supplier"] = el)}
        >
          <p>
            This is the salary box that appears when the Salary Info button is
            clicked.
          </p>
        </div>
      )}
      {showBox["finance"] && (
        <div
          className={Adash.box}
          ref={(el) => (boxRefs.current["finance"] = el)}
        >
          <p>
            This is the salary box that appears when the Finance Info button is
            clicked.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminDash;
