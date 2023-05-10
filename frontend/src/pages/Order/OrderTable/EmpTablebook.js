import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmpTablebook.css";
import axios from "axios";

const EmpTablebook = () => {
  const { _id } = useParams();
  const [books, setBooks] = useState("");
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false); // added state variable

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/tablebook");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const json = await response.json();
        setBooks(json);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchBooks();
  }, [_id, refresh]); // added refresh dependency

  const history = useNavigate();

  const deleteHandler = async (_id) => {
    await axios
      .delete("http://localhost:5000/tablebook/" + _id)
      .then((res) => res.data)
      .then(() => {
        setRefresh(!refresh); // toggle refresh state variable
        history("/"); // navigate to home page
        history("/emptable"); // navigate to table book page
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="emptablebck">
      <div>
        <table className="rdetailtable">
          <thead className="eadsamitha">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Party Size</th>
              <th scope="col">Phone Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((data, index) => (
                <tr key={data._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
                  <td>{data.Psize}</td>
                  <td>{data.Phone}</td>
                  <td>
                    <button
                      className="Detailsbtn Deletebtn"
                      onClick={(e) => deleteHandler(data._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpTablebook;
