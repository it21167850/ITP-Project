express = require('express')
mongoose = require('mongoose');
const addItem = require('../models/addItem');

function addItems(req,res){

    const { itemCode, itemName,date,stockin,stockout, quantityInStock, reorderlevel} = req.body
    let newProduct = new addItem();
  
    newProduct.itemCode = itemCode
    newProduct.itemName = itemName
    newProduct.date = date
    newProduct.stockin = stockin
    newProduct.stockout= stockout
    newProduct.quantityInStock = quantityInStock
    newProduct.reorderlevel = reorderlevel


    newProduct.save().then((response)=>{
        res.send(response)
    })
   
}
module.exports = addItems