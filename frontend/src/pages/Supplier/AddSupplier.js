import { Button, FormLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Validation from './Validation';

const AddSupplier = () => {
  const history =useNavigate();
  const [inputs, setInputs] = useState({
    sup_ID:'',
    sup_Name:'',
    product_ID:'',
    product_Name:'',
    unit_price:'',
    quantity:''
  });

const[errors, setErrors] = useState({})

  const handleChange = (e) => {
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }));
    //console.log(e.target.name,"Value",e.target.value); 
  }

  const sendRequest = async() => {
    await axios.post("http://localhost:5000/suppliers",{
      sup_ID:String(inputs.sup_ID),
      sup_Name: String(inputs.sup_Name),
      product_ID: String(inputs.product_ID),
      product_Name: String(inputs.product_Name),
      unit_price: String(inputs.unit_price),
      quantity: String(inputs.quantity),
    }).then(res=>res.data);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    setErrors(Validation(inputs));
    sendRequest().then(()=>history('/suppliers'));
    
  }

  return (
  <form onSubmit={handleSubmit}>
    <Box 
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      maxWidth={600}
      alignContent={"center"}
      alignSelf="center"
      marginLeft={"auto"}
      marginRight="auto"
      marginTop={3}
      marginBottom={5}
    >
    <FormLabel>Supplier ID</FormLabel>
    <TextField
    required
     value={inputs.sup_ID}
     onChange={handleChange}
     margin="normal"
     fullWidth variant = "outlined"
     name="sup_ID"
    />
    {errors.sup_ID && <p style={{color:"red"}}>{errors.sup_ID}</p>}
    
    <FormLabel>Supplier Name</FormLabel>
    <TextField
    required
     value={inputs.sup_Name}
     onChange={handleChange}
     margin="normal" fullWidth variant = "outlined" name="sup_Name"/>
     {errors.sup_Name && <p style={{color:"red"}}>{errors.sup_Name}</p>}

    <FormLabel>Product ID</FormLabel>
    <TextField
    required
     value={inputs.product_ID}
     onChange={handleChange}
     margin="normal" fullWidth variant = "outlined" name="product_ID"/>
    {errors.product_ID && <p style={{color:"red"}}>{errors.product_ID}</p>}

    <FormLabel>Product Name</FormLabel>
    <TextField
    required
     value={inputs.product_Name}
     onChange={handleChange}
     margin="normal" fullWidth variant = "outlined" name="product_Name"/>
    {errors.product_Name && <p style={{color:"red"}}>{errors.product_Name}</p>}

    <FormLabel>Unit Price</FormLabel>
    <TextField
    required
     value={inputs.unit_price}
     onChange={handleChange}
     type='number' margin="normal" fullWidth variant = "outlined" name="unit_price"/>
    {errors.unit_price && <p style={{color:"red"}}>{errors.unit_price}</p>}

    <FormLabel>Quantity</FormLabel>
    <TextField
    required
     value={inputs.quantity}
     onChange={handleChange}
     type='number' margin="normal" fullWidth variant = "outlined" name="quantity"/>
    {errors.quantity && <p style={{color:"red"}}>{errors.quantity}</p>}

    <Button variant='contained' type='submit'>Add Supplier</Button>
    </Box>
  </form>
  ); 
};   

export default AddSupplier;