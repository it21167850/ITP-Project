const ownDrink = require('../models/OwnDrink')





const getAllowndrinks = async(req,res,next) =>{
    let odrink;
    try{
        odrink= await ownDrink.find();

    }
    catch(err)
    {
        console.log(err);
    }

    if(!odrink)
    {
        return res.status(404).json({message:"No product found"})
    }
    return res.status(200).json({odrink})

}




const getById = async(req,res,next) =>{
   
    const id = req.params.id
    let odrink  ;
    try{
        odrink =  await ownDrink.findById(id);
    }catch(err)
    {
        console.log(err);
    }


    if(!odrink)
    {
        return res.status(404).json({message:"No food item found found"})
    }
    return res.status(200).json({odrink})


}



const addowndrink = async(req,res,next) =>{
   
    const{name,category,price,image} = req.body;
     let odrink;
 
 
     try{
         odrink = new ownDrink ({
             name,

             category,
            
             price,
       
             image
             
         });
         await odrink.save();
     }catch(err)
     {
         console.log(err);
     }
 
 
     if(!odrink){
         return res.staus(500).json({message:'unable to add'});
 
         
     }
     return res.status(201).json({odrink});
 };



 
 const updateowndrink = async(req,res,next) =>{
    const id = req.params.id;
    const{name,category,price,image} = req.body;
    let Owndrink;
    
    try{
        Owndrink = await ownDrink.findByIdAndUpdate(id,{
            name,
            category,
            price,
            image
        });
        Owndrink = await Owndrink.save()
    }
    catch(err)
    {
        console.log(err);
    }


    if(!Owndrink){
        return res.staus(404).json({message:'unable to update by this id'});

        
    }
    return res.status(200).json({Owndrink});




}



const deleteOwndrink = async(req,res,next) =>{
    const id = req.params.id
    let odrink;
    try{
        odrink = await ownDrink.findByIdAndRemove(id)
        
    }catch(err)
    {
        console.log(err);
    }
     


    if(!odrink){
        return res.status(404).json({message:'unable to delete by this id'});

        
    }
    return res.status(200).json('Food item successfully deleted');




}



exports.getAllowndrinks=getAllowndrinks;
exports.deleteOwndrink=deleteOwndrink;
exports.updateowndrink=updateowndrink;
exports.addowndrink=addowndrink;
exports.getById=getById;
