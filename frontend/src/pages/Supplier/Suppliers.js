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
import { Box, Button, Form, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import jsPdf from 'jspdf';
import 'jspdf-autotable';
import logo from '../../images/logo.png'



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
      border: 1,
    },
  }));
  
 
const URL = "http://localhost:5000/suppliers";


const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
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

function generatePdf(){
  const unit = 'pt';
  const size = 'A4';
  const orientation = 'portrait';

  const doc = new jsPdf(orientation, unit, size);
  const marginLeft = 40

  const imagedata = logo;
  
  doc.setDrawColor(0);
  doc.setLineWidth(2);
  doc.roundedRect(
    20,
    20,
    doc.internal.pageSize.width - 40,
    doc.internal.pageSize.height -40,
    10,
    10,
    'D'
  );

  doc.setFontSize(15);
  
  const title = 'Suppliers details';
  
  const headers = [['Supplier ID', 'Supplier Name', 'Product ID', 'Product Name', 'Unit Price(Rs)', 'Quantity', 'Price(Rs)']];

  const data = suppliers && suppliers.map((row) => [

    row.sup_ID,
    row.sup_Name,
    row.product_ID,
    row.product_Name,
    ccyFormat(row.unit_price),
    row.quantity,
    ccyFormat(Math.round(row.unit_price * row.quantity))
 ]);

  let content = {
    startY: 270,
    head: headers,
    body: data
  };

  //const dateTime = 'Supplied date & Time : ' + new Date().toLocaleString();
  const end = '<<< This is auto generated report. All rights NS Restuarant >>>';
 
  const imageWidth = 200;
  const imageheight = 200;
  const imageX = (doc.internal.pageSize.width - imageWidth)  / 2;
  const imageY = 30;

 

  doc.addImage(imagedata, 'PNG', imageX, imageY, imageWidth, imageheight)
  doc.text(title, 80, 250, {fontSize: 50});
  
  doc.autoTable(content);
  //doc.text(dateTime, marginLeft,100);
  doc.text(end, marginLeft, 810);
  

  doc.save('suppliers Report.pdf');
}
    

const [searchTerm, setSearchTerm] = useState("");
const [filteredSuppliers, setFilteredSuppliers] = useState([]);  

useEffect(() => {
  fetchHandler().then((data) => {
    setSuppliers(data.suppliers);
    setFilteredSuppliers(data.suppliers);
  });
}, []);

useEffect(() => {
  if (suppliers) {
    const filtered = suppliers.filter((supplier) =>
      supplier.sup_ID.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSuppliers(filtered);
  }
}, [searchTerm, suppliers]);

console.log(filteredSuppliers);
    
return (
        <>

          {/* searchbar */}

          <Box display="flex" justifyContent="center" marginTop={5}  marginLeft={10} marginRight={10}>
                  <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </Box>
        

        
        {/* genPdf and and sup btns */}
        <Box display="flex" justifyContent="right" marginTop={5}  marginRight={10}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color='success' aria-label="#"
            onClick={generatePdf}> Report</Button>
          <Link to={'/addsupplier'}>
            <Button variant="contained" color='success' aria-label="#"> + Supplier</Button>
          </Link>
        </Stack>  
        </Box>

        {/* Supp table */}
        <Box
        display="flex"
        justifyContent={"center"}
        alignContent={"center"}
        marginLeft={10}
        marginRight={10}
        marginTop={5}
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
            filteredSuppliers.map((row) => (
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