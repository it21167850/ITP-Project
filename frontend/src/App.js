import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
// import Main from "./components/Main";
import EmpDash from "./components/Dashboard/EmpDash/EmpDash";
import Login from "./components/Login";
import AdminDash from "./components/Dashboard/AdminDash/AdminDash";
import MenuDash from "./components/Dashboard/MenuDash/MenuDash";
import Delivery from "./components/Dashboard/DeliveryDash/DeliveryDash";
import Dtable from "./pages/delivery/DeliveryTable/Dtable";

//import CustOwnMeal from "./pages/Menu/CustOwnMeal";
import Track from "./pages/delivery/Tracking/Tracking";

import Payment from "./pages/Order/Payment/payment";

import CustOwnMeal from "./pages/Menu/CustOwnMeal";
import OrderDetails from "./pages/Order/OrderForm/Addorderitem/Addorderitem";
import OrderForm from "./pages/Order/OrderForm/OrderForm";
import EmpRegister from "./pages/Employee/EmpRegister/EmpRegister";
import AttendanceForm from "./pages/Employee/Attendance/AttendanceForm/AttendanceForm";
import EmpDetails from "./pages/Employee/EmpDetails/EmpDetails";
import FinanceDash from "./components/Dashboard/FinanceDash/FinanceDash";
import OrderDash from "./components/Dashboard/OrderDash/OrderDash";
import StockDash from "./components/Dashboard/StockDash/StockDash";
import SupplierDash from "./components/Dashboard/SupplierDash/SupplierDash";
import Profile from "./pages/Employee/EmpProfile/Profile";

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
        {user && <Route path="/financedash" element={<FinanceDash />} />}
        {user && <Route path="/orderdash" element={<OrderDash />} />}
        {user && <Route path="/stockdash" element={<StockDash />} />}
        {user && <Route path="/supplierdash" element={<SupplierDash />} />}
        {user && <Route path="/profile" element={<Profile />} />}
        <Route path="/" exact element={<Login />} />
        {/* <Route path="/empdash" element={<Navigate replace to="/login" />} /> */}
        <Route path="/admindash" element={<Navigate replace to="/login" />} />
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />

        <Route path="/admindash/empregister" element={<EmpRegister />} />
        <Route path="/admindash/attendancefrom" element={<AttendanceForm />} />
        <Route path="/admindash/empdetails" element={<EmpDetails />} />

        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />
      </Routes>
    </>
  );
}

export default App;
