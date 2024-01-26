import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserContext } from "../src/context";
const root = ReactDOM.createRoot(document.getElementById("root"));

const customer_login = localStorage.getItem("customer_login");
const vendor_id = localStorage.getItem("VendorToken");
const customer_id = localStorage.getItem("customer_id");

root.render(
  <>
    <Router>
      <UserContext.Provider
        value={{
          login: customer_login,
          customer_id: customer_id,
          vendor_id: vendor_id,
        }}
      >
        <App />
      </UserContext.Provider>
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
