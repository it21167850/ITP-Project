import React, { useEffect, useState } from "react";
import axios from "axios";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const currentDate = new Date().toLocaleDateString("en-GB");

  console.log(currentDate);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/attendance/");
        if (!response.ok) {
          throw new Error("Failed to fetch Employees");
        }
        const json = await response.json();
        setAttendanceData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAttendance();
  }, []);

  useEffect(() => {
    const fetchEmp = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users/");
        if (!response.ok) {
          throw new Error("Failed to fetch Employees");
        }
        const json = await response.json();
        setAttendanceData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmp();
  }, []);

  const insertDataAndMarkAttendance = (rowData) => {
    const isAttendanceMarked = attendanceData.some(
      (attendance) =>
        attendance.empId === rowData.empId && attendance.date === currentDate
    );

    if (isAttendanceMarked) {
      console.log(
        "Attendance already marked for the employee on the current date"
      );
      return;
    }

    const updatedEmployee = {
      ...rowData,
      name: rowData.fullName,
      date: currentDate,
      status: rowData.status + 1, // Increment the status by one
    };

    axios
      .post("http://localhost:5000/api/attendance/", updatedEmployee)
      .then((response) => {
        console.log("Data inserted successfully:", response.data);

        // Check if the attendance ID is available
        if (response.data && response.data._id) {
          const attendanceId = response.data._id;

          // Update the attendance status
          const updatedAttendance = {
            ...updatedEmployee,
            _id: attendanceId,
          };

          axios
            .put(
              `http://localhost:5000/api/attendance/${attendanceId}`,
              updatedAttendance
            )
            .then(() => {
              console.log("Attendance marked successfully");
              // Perform any additional actions after successful attendance marking
            })
            .catch((error) => {
              console.error("Failed to mark attendance:", error);
              // Handle the error, if needed
            });
        } else {
          console.error("Failed to retrieve attendance ID from the response");
        }
      })
      .catch((error) => {
        console.error("Failed to insert data:", error);
        // Handle the error, if needed
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Date</th>
            <th>Mark Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <tr key={attendance.empId}>
              <td>{attendance.empId}</td>
              <td>{attendance.fullName}</td>
              <td>{attendance.role}</td>
              <td>{currentDate}</td>

              <td>
                <button onClick={() => insertDataAndMarkAttendance(attendance)}>
                  Mark
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
