express = require('express');
mongoose = require('mongoose');
const addItem = require('../models/addItem');



function editItems(req,res){
    const { itemID, itemCode,date, itemName, amountunitPrice, stockin,stockout, quantityInStoc, reorderlevel, inventeryvalue} = req.body
    addItem.updateOne({_id : itemID},{$set :{

        itemCode : itemCode,
        itemName : itemName,
        itemDate : date,
        amountunitPrice : amountunitPrice,
        stockin:stockin,
        stockout:stockout,
        quantityInStoc : quantityInStoc,
        reorderlevel:reorderlevel,
        inventeryvalue : inventeryvalue

    }}).then((response)=>{
        res.send(response)
    })
}

module.exports = editItems