const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/fooditem-routes");
const dotenv = require("dotenv");
const cors = require("cors");
const router1 = require("./routes/package-routes");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const router2 = require("./routes/payment-routes");

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//routes
app.use("/fooditems", router);
app.use("/packages", router1);
app.use("/customerfooditems", router);
app.use("/customerpackages", router1);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/payment", router2);

app.get("/", (req, res) => {
  res.send("API is running..");
});

//database connection
mongoose
  .connect(
    "mongodb+srv://thilinahansana1100:1100@cluster0.m8aubi7.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    app.listen(process.env.PORT, console.log("Hey im thilina"));
  })
  .catch((err) => console.log(err));
