const express = require("express");
const router1 = express.Router();

const packageController = require("../controllers/package-controller");
router1.get("/", packageController.getAllpackages);
router1.get("/:id", packageController.getById);
router1.post("/", packageController.addPackage);
router1.put("/:id", packageController.updatePackage);
router1.delete("/:id", packageController.deletePackage);

module.exports = router1;
