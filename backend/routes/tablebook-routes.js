const express = require("express");

const router9 = express.Router();

const Ordertablecontroller = require("../controllers/tablebook-controller");

router9.post("/", Ordertablecontroller.Addbooktable);
router9.get("/", Ordertablecontroller.getAllbooktable);
router9.get("/:id", Ordertablecontroller.getbybookId);
router9.delete("/:id", Ordertablecontroller.deletebooking);

module.exports = router9;
