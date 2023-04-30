const express = require("express")
const router = express.Router();


const Fooditem = require("../models/foodItem")



const Omealcontroller = require("../controllers/ownmeal-controller")

router.get("/",Omealcontroller.getAllownmeals) ;
     router.post("/",Omealcontroller.addownmeal);
     router.get("/:id",Omealcontroller.getById);
     router.put("/:id",Omealcontroller.updateOwnmeal);
    router.delete("/:id",Omealcontroller.deleteOwnmeal);


module.exports =  router;

















/*


router.route("/add").post((req,res)=>{

  const name = req.body.name; 
  const category = req.body.category;
  const description = req.body.description;
  const price  = Number(req.body.price);
  const image  =  req.body.image;
  const offer = Number(req.body.offer);

  const newFoodItem  = new fooditem({
        
            name,
            category,
            description,
            price,
            image,
            offer


  })

    newFoodItem.save().then(()=>{
        res.json("Food item added")
    }).catch((err)=>{
        console.log("hariynne n");
    })


  
}) 

router.route("/").get((req,res)=>{
    fooditem.find().then((items)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})  

router.route("/update/:id").put(async(req,res) => {
    let user = req.params.id;
    const{ name,category,description,price,image,offer} = req.body;

    


    const updateFoodItem  = {
        
        name,
        category,
        description,
        price,
        image,
        offer


}


        const update = await fooditem.findByIdAndUpdate(userId,updateFoodItem).then(() =>{
            res.status(200).send({status:"update",user:update} )
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"error with update"});
        })







})  

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await fooditem.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status:"error with delete user", error:err.message})
    })
})


router.route("/get/:id").get(async (req,res) =>{
    let userId = req.params.id;
    await fooditem.findById(userId)
    .then(()=>{
        res.status(200).send({status:"patches"});
    }).catch((err)=>{
    console.log(err.message);
    res.staus(500).send({staus:"error with user"}, {error:err.message})
})

})


module.exports = router;
*/
