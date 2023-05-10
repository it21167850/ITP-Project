express = require("express");
mongoose = require("mongoose");
const addItem = require("../models/addItem");

function getAllItems(req, res) {
  addItem
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = getAllItems;
