const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/fooditem-routes");
const cors = require("cors");
const router1 = require("./routes/package-routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/fooditems", router);
app.use("/packages", router1);
app.use("/customerfooditems", router);
app.use("/customerpackages", router1);

mongoose
  .connect(
    "mongodb+srv://thilinahansana1100:1100@cluster0.m8aubi7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
