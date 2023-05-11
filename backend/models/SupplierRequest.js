const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const suppReqSchema = new Schema({
    pro_ID: {
        type:String,
        required: true
    },

    product_Name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
   
});




module.exports = mongoose.model("SupplierRequest", suppReqSchema);
//suppliers