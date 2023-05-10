const express = require('express');
const addItems = require('../controllers/S-AddItem-Controller');
const getAllItems = require('../controllers/S-ViewItem-Controller');
const editItems = require('../controllers/EditItemController');
const deleteItem = require('../controllers/S-DeleteItem-Controller');


const router = express.Router();


router.get("/view",getAllItems)

router.put("/update",editItems)

router.delete("/delete", deleteItem)

router.post("/add", addItems)


module.exports = router;