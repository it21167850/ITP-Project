import React, { useState } from 'react'
import "./ManageItem.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function EditItems() {

  
  const location = useLocation()

  const details = location.state.items 

  // console.log(details)

  // const details= {
  //     // code:codes,
  //     // name: names,
  //     // price: prices,
  //     // quantity: quantitys,
  //     // materials: materialss,
  //     // value: values
  // };



      const[code,setCode] = useState(details.itemCode)
      const[name,setName] = useState(details.itemName)
      const[date,setDate] = useState(details.date)
      const[price,setPrice] = useState(details.amountunitPrice)
      const[quantity,setQuantity] = useState(details.quantityInStoc)
      const[materials,setMaterials] = useState(details.usedMaterials)
      const[value,setValue] = useState(details.inventeryvalue)
      const[itemList,setItemList] = useState([])

      const navigate = useNavigate()
      const goBack = (e)=>navigate("/report")

  return (
    
    <div>  
      <h1>EDIT ITEM</h1>
      
      <form onSubmit={(e)=>{
            e.preventDefault()
            const newProduct = {
                itemID : details._id, 
                itemCode : code,
                itemName : name,
                Date : date,
                amountunitPrice : price,
                quantityInStoc : quantity,
                usedMaterials : materials,
                inventeryvalue : value,
            }
            axios.put("http://localhost:5000/stock/update",newProduct).then((response)=>{
                goBack()
            })
            }}>

            <div className='form-content'>


            <label htmlFor='Code'>Code</label>
            <input type='text' value={code} id='Code' onChange={(e)=> { setCode(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Name'>Name</label>
            <input type='text' value={name} id='Name' onChange={(e)=> { setName(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Date'>Date</label>
            <input type='text' value={date} id='Date' onChange={(e)=> { setDate(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Price'>Price</label>
            <input type='text' value={price} id='Price' onChange={(e)=> { setPrice(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Quantity'>Quantity</label>
            <input type='text' value={quantity} id='Quantity' onChange={(e)=> { setQuantity(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Materials'>Materials</label>
            <input type='text' value={materials} id='Materials' onChange={(e)=> { setMaterials(e.target.value);}} className='Blank1' required/>

            <label htmlFor='value'>value</label>            
            <input type='text' value={value} id='value' onChange={(e)=> { setValue(e.target.value);}} className='Blank1' required/>

           <div className='twoBtn'>
            <button type='cancel' onClick={(e) => {
              e.preventDefault();
              goBack();
            }} className='C1'>  Cancel </button>
                    
            <button type='submit' className='a1'>Update</button>
            </div>
            </div>

      </form>
            

</div>         
)
}

