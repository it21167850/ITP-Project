const moongose = require('mongoose');


const Schema = moongose.Schema;

const fooditemScema = new Schema({



      

        name:{
                type : String,
                required: true
        },

        category:{
            type : String,
            required: true
        },

        description:{
            type : String,
            required: true
        },

        price:{
            type : Number,
            required: true
        },

        country:{
            type : String,
            required: true
        },

        image:{
            type : String,
            required: true
        },

        offer:{
            type : Number,
            
        }

        


})
 

module.exports = moongose.model("FoodItem",fooditemScema)