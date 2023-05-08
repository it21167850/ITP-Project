const moongose = require('mongoose');


const Schema = moongose.Schema;

const OwnDrinkScema = new Schema({


        name:{
                type : String,
                required: true
        },


        category:{
            type : String,
            required: true
        },

       

        price:{
            type : Number,
            required: true
        },

      

        image:{
            type : String,
            required: true
        }

      

        


})
 

module.exports = moongose.model("OwnDrinks",OwnDrinkScema)