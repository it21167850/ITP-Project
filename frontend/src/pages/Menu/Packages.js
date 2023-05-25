import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Package from './Package';
import "./package.css"
import { Button } from '@mui/material';




const URL = "http://localhost:5000/packages";

const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
};







const Packages = () => {



  const [packages, setPackages] = useState();
  useEffect(()=>{
      

          fetchHandler().then((data)=>setPackages(data.packages));


  }, []);

  return (
    <div className='bigcard'  > 




<div className="square" style={{
      backgroundImage: 'url("https://www.womenfitness.net/wp/wp-content/uploads/2016/10/fast-food.jpg")',
      padding:'130px',
            
    }} width="750px" height="550px">

                                <p style={{fontSize:"45px"}}>Packages</p>     
      
      </div>



      
    <ul>
      
    
       {packages && 
              packages.map((pckge,i)=>(
          <li key={i}> 
              <Package pacKage={pckge}/>
            </li>

     

    ))} </ul>
    
    
    <Button variant="contained"  sx={{mt:"auto"}}>+ Add Package </Button>
    </div> 

  )
}

export default Packages 