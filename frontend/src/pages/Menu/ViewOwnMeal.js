
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './View.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleMeal from "./SingleMeal";
import ViewSingleOwn from "./ViewSingleOwn";
import { useNavigate, Link } from "react-router-dom";
import jsPdf from 'jspdf';
import 'jspdf-autotable';
import logo from '../../images/logo.png'
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const URL = "http://localhost:5000/menudash/CustOwnMeal";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const ViewOwnMeal = () => {
  const [ownMeals, setOwnMeals] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setOwnMeals(data.omeal));
  }, []);

  console.log(ownMeals);




  
const addf = (e) =>{
  e.preventDefault();

   
 history("/menudash/addCustOwnMeal")
  //  sendRequest();
}



  const history = useNavigate();

       const [searchTerm, setSearchTerm] = useState("");
       const [filtereditems, setFiltereditems] = useState([]);  
       
       
       useEffect(() => {
         fetchHandler().then((data) => {
           setOwnMeals(data.omeal);
           setFiltereditems(data.omeal);
         });
       }, []);
       
       useEffect(() => {
         if (ownMeals) {
           const filtered = ownMeals.filter((omeal) =>
             omeal.name.toLowerCase().includes(searchTerm.toLowerCase())
           );
           setFiltereditems(filtered);
         }
       }, [searchTerm, ownMeals]);
       
       console.log(filtereditems);




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
        
        const title = 'Custormized Menu';
        
        const headers = [['Name', 'Category',  'price']];
      
        const data = ownMeals && ownMeals.map((row) => [
      
          row.name,
          row.category,
            
          row.price,
          
       ]);
      
        let content = {
          startY: 270,
          head: headers,
          body: data
        };
      
      
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
        
      
        doc.save('Menu.pdf');
      }


  const deleteHandler = async (_id) => {
    await axios
      .delete("http://localhost:5000/menudash/CustOwnMeal/" + _id)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/menudash/ViewCustOwnMeal"));
      window.location.reload();
  };

  return (

    <div>



      <Box>

<div Style={{marginTop:"10px"}}>
<TextField
fullWidth
label="Search"
id="fullWidth"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
</Box>



<div style={{marginLeft:"1350px", marginTop:"10px"}}>
<Button variant="contained" color='success' aria-label="#"
            onClick={generatePdf}> Report</Button>
</div>



<div style={{marginLeft:"1350px", marginTop:"10px"}}>



<Button          variant="contained" color='success' aria-label="#"
      onClick={addf}     > Add Food items</Button>

      
</div>



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
               
  

          {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead> */}
            
              
              
              <StyledTableCell align="right"> Name</StyledTableCell>
              <StyledTableCell align="right"> category</StyledTableCell>
              <StyledTableCell align="right">image</StyledTableCell>
              <StyledTableCell align="right"> Price&nbsp;(Rs)</StyledTableCell>
              <StyledTableCell align="right"> Actions</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {ownMeals &&
              filtereditems.map((row) => (
              <StyledTableRow key={row.name}>
  
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right"><img src={row.image} width={100} height={100} ></img></StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
              
                <StyledTableCell align="right"> <Stack direction="row" spacing={2}>
                                                    <IconButton LinkComponent={Link} to={`/menudash/updateownmeal/${row._id}`}>
                                                      <EditIcon /> 
                                                    </IconButton>   
                                                    <IconButton  onClick={e => deleteHandler(row._id)}>
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
    </div>
  );
};

export default ViewOwnMeal;
