express = require('express');
mongoose = require('mongoose');
const addItem = require('../models/addItem');

function deleteItem(req,res){
    addItem.deleteOne({_id : req.body.Item}).then((response)=>{
        res.send(response)
    })
}

module.exports = deleteItem