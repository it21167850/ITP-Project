express = require('express');
mongoose = require('mongoose');
const addItem = require('../models/addItem');



function editItems(req,res){
    const { itemID, itemCode, itemName,date, stockin,stockout, quantityInStock, reorderlevel, } = req.body
    addItem.updateOne({_id : itemID},{$set :{

        itemCode : itemCode,
        itemName : itemName,
        Date : date,
        stockin:stockin,
        stockout:stockout,
        quantityInStock : quantityInStock,
        reorderlevel:reorderlevel,
       

    }}).then((response)=>{
        res.send(response)
    })
}

module.exports = editItems