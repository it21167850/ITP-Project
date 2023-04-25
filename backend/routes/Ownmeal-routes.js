const express = require("express")
const router = express.Router();


const Omealcontroller = require("../controllers/ownmeal-controller")

router.get("/",Omealcontroller.getAllownmeals) ;
     router.post("/",Omealcontroller.addownmeal);
     router.get("/:id",Omealcontroller.getById);
     router.put("/:id",Omealcontroller.updateOwnmeal);
    router.delete("/:id",Omealcontroller.deleteOwnmeal);


module.exports =  router;


