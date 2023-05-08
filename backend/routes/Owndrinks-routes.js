const express = require("express")
const router = express.Router();






const Odrinkcontroller = require("../controllers/owndrink-Controller")

router.get("/",Odrinkcontroller.getAllowndrinks) ;
     router.post("/",Odrinkcontroller.addownmeal);
     router.get("/:id",Odrinkcontroller.getById);
     router.put("/:id",Odrinkcontroller.updateOwnmeal);
    router.delete("/:id",Odrinkcontroller.deleteOwnmeal);


module.exports =  router;

