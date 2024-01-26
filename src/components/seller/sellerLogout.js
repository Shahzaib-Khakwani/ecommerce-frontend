import { useContext } from "react";
import { SellerContext } from "../../context";
function SellerLogout() {
  const { SellerData, setSellerData } = useContext(SellerContext);
  setSellerData(-1);
  window.location.href = "/seller/login";
}

export default SellerLogout;
