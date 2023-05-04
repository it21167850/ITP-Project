import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./bootstrap.min.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { DeliveryContextProvider } from "./context/DeliveryContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DeliveryContextProvider>
        <App />
      </DeliveryContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
