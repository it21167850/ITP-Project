import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./Allorder.css";
const URL = "http://localhost:5000/OrderForm/${_id}";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function OrderDetailPage() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      {books &&
        books?.data.map((book) => (
          <Card className="allorder">
            <div>name : {book.name}</div>
            <div>Phone: {book.Phone}</div>
          </Card>
        ))}
    </div>
  );
}

export default OrderDetailPage;
