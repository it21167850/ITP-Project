import { Box, Button, FormLabel, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { updateSupplier } from '../../../../backend/controllers/suppliers-controller';

const UpdateSupplier = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/suppliers/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.supplier));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/suppliers/${id}`, {
        sup_ID: String(inputs.sup_ID),
        sup_Name: String(inputs.sup_Name),
        product_ID: String(inputs.product_ID),
        product_Name: String(inputs.product_Name),
        unit_price: String(inputs.unit_price),
        quantity: String(inputs.quantity),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/suppliers"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={3}
            marginBottom={5}
          >
            <FormLabel>Supplier ID</FormLabel>
            <TextField
              value={inputs.sup_ID}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="sup_ID"
            />

            <FormLabel>Supplier Name</FormLabel>
            <TextField
              value={inputs.sup_Name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="sup_Name"
            />

            <FormLabel>Product ID</FormLabel>
            <TextField
              value={inputs.product_ID}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="product_ID"
            />

            <FormLabel>Product Name</FormLabel>
            <TextField
              value={inputs.product_Name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="product_Name"
            />

            <FormLabel>Unit Price</FormLabel>
            <TextField
              value={inputs.unit_price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="unit_price"
            />

            <FormLabel>Quantity</FormLabel>
            <TextField
              value={inputs.quantity}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="quantity"
            />

            <Button variant="contained" type="submit">
              Update Supplier
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default UpdateSupplier;
