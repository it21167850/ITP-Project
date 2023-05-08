import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 
const URL = "http://localhost:5000/suppliers";



const fetchHandler = async () => {
    return await axios.get(URL).then((res)=> res.data);
};

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState();
    useEffect(()=> {
        fetchHandler().then((data)=>setSuppliers(data.suppliers));
    }, []);  

    console.log(suppliers);

    const history = useNavigate();


const deleteHandler = async (_id) => {
      await axios
        .delete('http://localhost:5000/suppliers/' + _id)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/suppliers"));
    };

    function ccyFormat(num) {
      return `${num.toFixed(2)}`;
    }
    
  
    return (
        <>
        <Link to={"/addsupplier"}><Button>Add Supplier</Button></Link>
    
        <Box
        display="flex"
        justifyContent={"center"}
        alignContent={"center"}
        marginLeft={10}
        marginRight={10}
        marginTop={10}
        marginBottom={10}
        >     

          <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              
              <StyledTableCell align="right">Supplier ID</StyledTableCell>
              <StyledTableCell align="right">Supplier Name</StyledTableCell>
              <StyledTableCell align="right">Product ID</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Unit Price&nbsp;(Rs)</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price&nbsp;(Rs)</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers &&
              suppliers.map((row) => (
              <StyledTableRow key={row.name}>
  
                <StyledTableCell align="right">{row.sup_ID}</StyledTableCell>
                <StyledTableCell align="right">{row.sup_Name}</StyledTableCell>
                <StyledTableCell align="right">{row.product_ID}</StyledTableCell>
                <StyledTableCell align="right">{row.product_Name}</StyledTableCell>
                <StyledTableCell align="right">{ccyFormat(row.unit_price)}</StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{ccyFormat(Math.round(row.unit_price * row.quantity))}</StyledTableCell>
                <StyledTableCell align="right"> <Stack direction="row" spacing={2}>
                                                    <IconButton LinkComponent={Link} to={`/suppliers/${row._id}`}>
                                                      <EditIcon /> 
                                                    </IconButton>   
                                                    <IconButton onClick={e => deleteHandler(row._id)}>
                                                      <DeleteIcon />
                                                    </IconButton>
                                                    
                                                </Stack>                            
                </StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  </Box>
  
  </>      

        
    );
};

export default Suppliers;