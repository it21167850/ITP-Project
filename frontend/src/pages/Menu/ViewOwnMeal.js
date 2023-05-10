
import { Box, Button, FormControl, FormLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState , useEffect} from 'react'

import axios from "axios";
import SingleMeal from './SingleMeal';
import ViewSingleOwn from './ViewSingleOwn';





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
  












  return (
    <div>ViewOwnMeal


        <ul>

    {ownMeals && 
        ownMeals.map((OMEAL,i)=>(
    <li key={i}> 
        <ViewSingleOwn omeal={OMEAL}/>
      </li>



))}

</ul>

</div>




  )
}

export default ViewOwnMeal