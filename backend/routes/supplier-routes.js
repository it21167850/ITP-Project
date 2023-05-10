const express = require("express");
const router2 = express.Router();
const Supplier = require("../models/Supplier");

const suppsController = require("../controllers/suppliers-controller");

router2.get("/", suppsController.getAllSuppliers);
router2.post("/", suppsController.addSupplier);
router2.get("/:id", suppsController.getById);
router2.put("/:id", suppsController.updateSupplier);
router2.delete("/:id", suppsController.deleteSupplier);

module.exports = router2;
