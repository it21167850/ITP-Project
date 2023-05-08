

const ownmeal = require('../models/Ownmeal')






const getAllownmeals = async(req,res,next) =>{
    let omeal;
    try{
        omeal= await ownmeal.find();

    }
    catch(err)
    {
        console.log(err);
    }

    if(!omeal)
    {
        return res.status(404).json({message:"No product found"})
    }
    return res.status(200).json({omeal})

}


const getById = async(req,res,next) =>{
   
    const id = req.params.id
    let ownmeals  ;
    try{
        ownmeals =  await ownmeal.findById(id);
    }catch(err)
    {
        console.log(err);
    }


    if(!ownmeals)
    {
        return res.status(404).json({message:"No food item found found"})
    }
    return res.status(200).json({ownmeals})


}




const addownmeal = async(req,res,next) =>{
   
    const{name,category,price,image} = req.body;
     let omeal;
 
 
     try{
         omeal = new ownmeal ({
             name,

             category,
            
             price,
       
             image
             
         });
         await omeal.save();
     }catch(err)
     {
         console.log(err);
     }
 
 
     if(!omeal){
         return res.staus(500).json({message:'unable to add'});
 
         
     }
     return res.status(201).json({omeal});
 };




 const updateOwnmeal = async(req,res,next) =>{
    const id = req.params.id;
    const{name,category,price,image} = req.body;
    let Ownmeal;
    
    try{
        Ownmeal = await ownmeal.findByIdAndUpdate(id,{
            name,
            category,
            price,
            image
        });
        Ownmeal = await Ownmeal.save()
    }
    catch(err)
    {
        console.log(err);
    }


    if(!Ownmeal){
        return res.staus(404).json({message:'unable to update by this id'});

        
    }
    return res.status(200).json({Ownmeal});




}



const deleteOwnmeal = async(req,res,next) =>{
    const id = req.params.id
    let omeal;
    try{
        omeal = await ownmeal.findByIdAndRemove(id)
        
    }catch(err)
    {
        console.log(err);
    }
     


    if(!ownmeal){
        return res.status(404).json({message:'unable to delete by this id'});

        
    }
    return res.status(200).json('Food item successfully deleted');




}















exports.getAllownmeals=getAllownmeals;
exports.getById=getById;
exports.addownmeal=addownmeal;
exports.updateOwnmeal=updateOwnmeal;
exports.deleteOwnmeal=deleteOwnmeal;

// const ownmeal = require("../models/Ownmeal");

// const getAllownmeals = async (req, res, next) => {
//   let Omeals;
//   try {
//     Omeals = await ownmeal.find();
//   } catch (err) {
//     console.log(err);
//   }

//   if (!Omeals) {
//     return res.status(404).json({ message: "No product found" });
//   }
//   return res.status(200).json({ Omeals });
// };

// const getById = async (req, res, next) => {
//   const id = req.params.id;
//   let ownmeals;
//   try {
//     ownmeals = await ownmeal.findById(id);
//   } catch (err) {
//     console.log(err);
//   }

//   if (!ownmeals) {
//     return res.status(404).json({ message: "No food item found found" });
//   }
//   return res.status(200).json({ ownmeals });
// };

// const addownmeal = async (req, res, next) => {
//   const { name, category, price, image } = req.body;
//   let omeal;

//   try {
//     omeal = new ownmeal({
//       name,

//       category,

//       price,

//       image,
//     });
//     await omeal.save();
//   } catch (err) {
//     console.log(err);
//   }

//   if (!omeal) {
//     return res.staus(500).json({ message: "unable to add" });
//   }
//   return res.status(201).json({ omeal });
// };

// const updateOwnmeal = async (req, res, next) => {
//   const id = req.params.id;
//   const { name, category, price, image } = req.body;
//   let Ownmeal;

//   try {
//     Ownmeal = await ownmeal.findByIdAndUpdate(id, {
//       name,
//       category,
//       price,
//       image,
//     });
//     Ownmeal = await Ownmeal.save();
//   } catch (err) {
//     console.log(err);
//   }

//   if (!Ownmeal) {
//     return res.staus(404).json({ message: "unable to update by this id" });
//   }
//   return res.status(200).json({ Ownmeal });
// };

// const deleteOwnmeal = async (req, res, next) => {
//   const id = req.params.id;
//   let omeal;
//   try {
//     omeal = await ownmeal.findByIdAndRemove(id);
//   } catch (err) {
//     console.log(err);
//   }

//   if (!ownmeal) {
//     return res.status(404).json({ message: "unable to delete by this id" });
//   }
//   return res.status(200).json("Food item successfully deleted");
// };

// exports.getAllownmeals = getAllownmeals;
// exports.getById = getById;
// exports.addownmeal = addownmeal;
// exports.updateOwnmeal = updateOwnmeal;
// exports.deleteOwnmeal = deleteOwnmeal;

