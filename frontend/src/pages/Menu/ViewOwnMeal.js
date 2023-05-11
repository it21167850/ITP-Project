
//import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState , useEffect} from 'react'

import axios from "axios";
import SingleMeal from './SingleMeal';
import ViewSingleOwn from './ViewSingleOwn';


//import React, { useEffect, useState } from 'react'
//import axios from "axios";
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



































const URL = "http://localhost:5000/menudash/CustOwnMeal"


const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
};



const ViewOwnMeal = () => {


    const [ownMeals,setOwnMeals] = useState();
    useEffect(()=>{
        
  
            fetchHandler().then((data)=>setOwnMeals(data.omeal));
  
  
    }, []);
  
   console.log(ownMeals);
  



   const history = useNavigate();


   const deleteHandler = async (_id) => {
         await axios
           .delete('http://localhost:5000/menudash/CustOwnMeal/' + _id)
           .then((res) => res.data)
           .then(() => history("/"))
           .then(() => history("/menudash/ViewCustOwnMeal"));
       };
   








  return (
    <div>ViewOwnMeal


         {/* <ul>

    {ownMeals && 
        ownMeals.map((OMEAL,i)=>(
    <li key={i}> 
        <ViewSingleOwn omeal={OMEAL}/>
      </li>



))}

</ul> 
 */}



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
              
              
              <StyledTableCell align="right"> Name</StyledTableCell>
              <StyledTableCell align="right"> category</StyledTableCell>
              <StyledTableCell align="right">image</StyledTableCell>
              <StyledTableCell align="right"> Price&nbsp;(Rs)</StyledTableCell>
              <StyledTableCell align="right"> Actions</StyledTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {ownMeals &&
              ownMeals.map((row) => (
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




  )
}

export default ViewOwnMeal