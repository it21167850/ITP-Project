import React, { useState } from "react";
import axios from "axios";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index

  console.log(currentMonth);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/");
      const data = response.data;
      setAttendanceData(data);
    } catch (error) {
      console.error("Failed to fetch attendance:", error);
    }
  };

  const insertDataAndMarkAttendance = (rowData) => {
    const updatedEmployee = {
      ...rowData,
      name: rowData.fullName, // Add the name field
      month: currentMonth, // Add the month field
      status: 1,
    };

    axios
      .post("http://localhost:5000/api/attendance/", updatedEmployee)
      .then((response) => {
        console.log("Data inserted successfully:", response.data);
        // Perform any additional actions after successful insertion

        // Update the attendance status
        axios
          .put(
            `http://localhost:5000/api/attendance/${rowData._id}`,
            updatedEmployee
          )
          .then(() => {
            console.log("Attendance marked successfully");
            // Perform any additional actions after successful attendance marking
          })
          .catch((error) => {
            console.error("Failed to mark attendance:", error);
            // Handle the error, if needed
          });
      })
      .catch((error) => {
        console.error("Failed to insert data:", error);
        // Handle the error, if needed
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get Attendance</button>
      {attendanceData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Month</th>
              <th>Status</th>
              <th>Mark Attendance</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance) => (
              <tr key={attendance.empId}>
                <td>{attendance.empId}</td>
                <td>{attendance.fullName}</td>
                <td>{attendance.role}</td>
                <td>{currentMonth}</td>
                <td>{attendance.status}</td>
                <td>
                  <button
                    onClick={() => insertDataAndMarkAttendance(attendance)}
                  >
                    Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>
          No attendance data available. Click the button to fetch attendance.
        </p>
      )}
    </div>
  );
};

export default AttendanceTable;
