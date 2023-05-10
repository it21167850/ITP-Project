const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const suppSchema = new Schema({
    sup_ID: {
        type:String,
        required: true
    },
    sup_Name: {
        type: String,
        required: true
    },
    product_ID: {
        type: String,
        required: true
    },
    product_Name: {
        type: String,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
        
    },
    quantity: {
        type: Number,
        required: true
    }
    //status:{5
     //   type
   // }
});




module.exports = mongoose.model("Supplier", suppSchema);
//suppliers

