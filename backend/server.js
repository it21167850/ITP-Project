const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/fooditem-routes");
const dotenv = require("dotenv");
const cors = require("cors");
const router1 = require("./routes/package-routes");

const routerm = require("./routes/Ownmeal-routes");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


const router2 = require("./routes/supplier-routes");


const Menuownroutes = require("./routes/Ownmeal-routes");
const Payment = require("./routes/payment-routes");
const routesCreOWME = require("./routes/Ownmeal-routes");
const OrderForm = require("./routes/OrderForm-routes");

const Router4 = require("./routes/OrderDetails-routes");


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


app.use("/custownmeal", routerm);


app.use("/menudash/CustOwnMeal", routesCreOWME);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/suppliers", router2);
//app.use("/addsupplier", router2);

app.use("/custownmeal", Menuownroutes);
app.use("/payment", Payment);
app.use("/OrderForm", OrderForm);
app.use("/AOD", Router4);


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
