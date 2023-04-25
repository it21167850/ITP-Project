import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
// import Main from "./components/Main";
import EmpDash from "./components/Dashboard/EmpDash/EmpDash";
import Login from "./components/Login";
import AdminDash from "./components/Dashboard/AdminDash/AdminDash";
import MenuDash from "./components/Dashboard/MenuDash/MenuDash";
import Delivery from "./components/Dashboard/DeliveryDash/DeliveryDash";

import StockDash from "./components/Dashboard/StockDash/StockDash";
import OrderDash from "./components/Dashboard/OrderDash/OrderDash";
import FinanceDash from "./components/Dashboard/FinanceDash/FinanceDash";
import Dtable from "./pages/delivery/DeliveryTable/Dtable";
import CustOwnMeal from "./pages/Menu/CustOwnMeal";
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
        {user && <Route path="/stockdash" exact element={<StockDash />} />}
        {user && <Route path="/orderdash" exact element={<OrderDash />} />}
        {user && <Route path="/financedash" exact element={<FinanceDash />} />}
        {user && <Route path="/orderdash" exact element={<OrderDash />} />}
        <Route path="/" exact element={<Login />} />
        <Route path="/empdash" element={<Navigate replace to="/login" />} />
        <Route path="/admindash" element={<Navigate replace to="/login" />} />
        <Route path="/deliverydash/dtable" element={<Dtable />} exact />
        <Route path="/menudash/CustOwnMeal" element={<CustOwnMeal />} exact />
      </Routes>
    </>
  );
}

export default App;
