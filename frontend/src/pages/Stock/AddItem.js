import React, { useState } from 'react'
import "./AddItem.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./AddItem.css"

export default function AddItem() {

      const[code,setCode] = useState("")
      const[name,setName] = useState("")
      const[date,setDate] = useState("")
      const[price,setPrice] = useState("")
      const[purchase,setPurchase] = useState("")
      const[sold,setSold] = useState("")
      const[quantity,setQuantity] = useState("")
      const[reorderlevel,setReorderlevel] = useState("")
      const[value,setValue] = useState("")
      const[itemList,setItemList] = useState([])

      const navigate = useNavigate()
      const goBack = (e)=>navigate("/stockdash/report")

  return (
    
    <div>  
      <h1>ADD ITEM</h1>
      
      <form onSubmit={(e) => {
            e.preventDefault()
            const newProduct = { 
                  itemCode:code,
                  itemName:name,
                  date:date,
                  amountunitPrice:price,
                  stockIn:purchase,
                  stockOut:sold,
                  quantityInStoc:quantity,
                  reOrderLevel:reorderlevel,
                  inventeryvalue:value
            }
            axios.post("http://localhost:5000/stock/add",newProduct).then((response)=>{
                    setItemList([])
                  goBack();
                  console.log(newProduct)
            })
            }}>

            <div className='form-content'>


            <label htmlFor='Code'>Code</label>
            <input type='text' id='Code' onChange={(e)=> { setCode(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Name'>Name</label>
            <input type='text' id='Name' onChange={(e)=> { setName(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Date'>Date</label>
            <input type='text' id='Date' onChange={(e)=> { setDate(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Price'>Price</label>
            <input type='text' id='Price' onChange={(e)=> { setPrice(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Purchase'>Purchase</label>            
            <input type='text' id='Purchase' onChange={(e)=> { setPurchase(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Sold'>Sold</label>            
            <input type='text' id='Sold' onChange={(e)=> { setSold(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Quantity'>Quantity</label>
            <input type='text' id='Quantity' onChange={(e)=> { setQuantity(e.target.value);}} className='Blank1' required/>

            <label htmlFor='Reorderlevel'>Reorderlevel</label>
            <input type='text' id='Reorderlevel' onChange={(e)=> { setReorderlevel(e.target.value);}} className='Blank1' required/>

            <label htmlFor='value'>value</label>            
            <input type='text' id='value' onChange={(e)=> { setValue(e.target.value);}} className='Blank1' required/>

           <div className='twoBtn'>
            <button className='C1'onClick={(e)=>{
                  e.preventDefault();
                  goBack();
            }}>  Cancel </button>
                    
            <button type='submit' className='a1'>Add</button>
            </div>
            </div>

      </form>
            

</div>         
)
}
