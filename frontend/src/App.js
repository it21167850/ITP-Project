import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
// import Main from "./components/Main";
import EmpDash from "./components/Dashboard/EmpDash/EmpDash";
import Login from "./components/Login";
import AdminDash from "./components/Dashboard/AdminDash/AdminDash";
import MenuDash from "./components/Dashboard/MenuDash/MenuDash";
import Delivery from "./components/Dashboard/DeliveryDash/DeliveryDash";
import Dtable from "./pages/delivery/DeliveryTable/Dtable";
import Payment from "./pages/Order/Payment/payment";
import CustOwnMeal from "./pages/Menu/CustOwnMeal";
import OrderDetails from "./pages/Order/OrderForm/Addorderitem/Addorderitem";
import OrderForm from "./pages/Order/OrderForm/OrderForm";
import EmpRegister from "./pages/Employee/EmpRegister/EmpRegister";

function App() {
  const user = localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <Routes>
        {user && <Route path="/empdash" exact element={<EmpDash />} />}

        {user && <Route path="/admindash" exact element={<AdminDash />} />}

        {user && <Route path="/menudash" exact element={<MenuDash />} />}
        {user && <Route path="/deliverydash" exact element={<Delivery />} />}
        <Route path="/" exact element={<Login />} />
        {/* <Route path="/empdash" element={<Navigate replace to="/login" />} /> */}
        <Route path="/admindash" element={<Navigate replace to="/login" />} />
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/menudash" element={<CustOwnMeal />} exact />

        <Route path="/admindash/empregister" element={<EmpRegister />} />

        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />
      </Routes>
    </>
  );
}

export default App;
