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

import Otable from "./pages/Order/OrderDetails/AllOrders/Orderdetailtable";

import AttendanceForm from "./pages/Employee/Attendance/AttendanceForm/AttendanceForm";
import EmpDetails from "./pages/Employee/EmpDetails/EmpDetails";
import FinanceDash from "./components/Dashboard/FinanceDash/FinanceDash";
import OrderDash from "./components/Dashboard/OrderDash/OrderDash";
import StockDash from "./components/Dashboard/StockDash/StockDash";
import SupplierDash from "./components/Dashboard/SupplierDash/SupplierDash";
import Profile from "./pages/Employee/EmpProfile/Profile";

import AddSupplier from "./pages/Supplier/AddSupplier";
import Suppliers from "./pages/Supplier/Suppliers";
import UpdateSupplier from "./pages/Supplier/UpdateSupplier";

import Tracking from "./pages/delivery/Tracking/Tracking";
import Addownmeal from "./pages/Menu/Addownmeal";

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

        <Route path="/deliverydash/tracking" element={<Tracking />} exact />
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />
        <Route path="/menudash/addCustOwnMeal" element={<Addownmeal />} exact />

        <Route path="/admindash/empregister" element={<EmpRegister />} />

        <Route path="/payment" element={<Payment />} exact />
        <Route path="/orderd" element={<OrderDetails />} exact />
        <Route path="/orderform" element={<OrderForm />} exact />

        <Route path="/table" element={<Otable />} exact />

        <Route path="/addsupplier" element={<AddSupplier />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/updatesupp" element={<UpdateSupplier />} />

        <Route path="/table" element={<OrderTable />} exact />
      </Routes>
    </>
  );
}

export default App;
