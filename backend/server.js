const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/fooditem-routes");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const router1 = require("./routes/package-routes");

const routerm = require("./routes/Ownmeal-routes");

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const salaryRouter = require("./routes/salary");
const router2 = require("./routes/supplier-routes");
const router9 = require("./routes/tablebook-routes");

const Menuownroutes = require("./routes/Ownmeal-routes");
const Payment = require("./routes/payment-routes");
const routesCreOWME = require("./routes/Ownmeal-routes");
const OrderForm = require("./routes/OrderForm-routes");
const delivery = require("./routes/delivery");
const Router4 = require("./routes/OrderDetails-routes");
const tracking = require("./routes/tracking");
const stockroute = require("./routes/stock-routes");

const attendanceRoute = require("./routes/attendance");

//middlewares
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
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
app.use("/api/delivery", delivery);
app.use("/api/tracking", tracking);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/salary", salaryRouter);
app.use("/api/attendance", attendanceRoute);
app.use("/suppliers", router2);
//app.use("/addsupplier", router2);

app.use("/custownmeal", Menuownroutes);
app.use("/payment", Payment);
app.use("/OrderForm", OrderForm);
app.use("/tablebook", router9);
app.use("/AOD", Router4);
app.use("/stock", stockroute);

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
