const moongose = require('mongoose');


const Schema = moongose.Schema;

const OwnMealScema = new Schema({


        name:{
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
 

module.exports = moongose.model("OwnMeal",OwnMealScema)