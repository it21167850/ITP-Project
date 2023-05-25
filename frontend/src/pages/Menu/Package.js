import React from 'react'
import "./package.css"
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Package = (props) => {



  const history = useNavigate();
    const{_id,name,combinefoods,description,price,image1,image2,image3,offer} = props.pacKage;

  const deleteHandler= async()=>{
      await axios.delete(`http://localhost:5000/packages/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/packages"));
  }



  return (
    <div  className='cardp'>

         


          <center><h1>{name}</h1></center>

<center>
<div >
<img classNamee="sub"src={image1} alt={name}  width="250" height="250"/>
</div>

<div style={{border:"3px"}}>
<img src={image2} alt={name} classNamee="sub"  width="250" height="250"/>
</div>


<div style={{border:"3px"}}>
<img src={image3} alt={name} classNamee="sub" width="250"height="250"/>
</div>

</center>
     

            <h3>{combinefoods}</h3>
            <h3>{description}</h3>
            <h3>{price}</h3> 
            <h3>{offer}</h3>
            

       <Button variant="contained" LinkComponent={Link} to = {`/packages/${_id}`}sx={{mt:"auto"}}>update</Button>

       <br/>
       <br/>
        <Button variant="contained" onClick={deleteHandler} sx={{mt:"auto"}}>delete</Button>
          



    </div>
   
    
  )
}

export default Package