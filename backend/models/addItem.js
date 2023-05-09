const mongoose = require('mongoose')

const addItemScheam = mongoose.Schema(
    {
      itemCode:String,
      itemName:String,
      date:String,
      amountunitPrice:String,
      stockin:String,
      stockout:String,
      quantityInStoc:String,
      reorderlevel:String,
      inventeryvalue:String,

    }
    )
 module.exports = mongoose.model('addItem',addItemScheam);   