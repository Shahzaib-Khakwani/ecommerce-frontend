import { useState } from "react";
import axios from "axios";

function Logout(props) {
  localStorage.removeItem("customer_login");
  localStorage.removeItem("username");
  window.location.href = "/customer/login";
}

export default Logout;
