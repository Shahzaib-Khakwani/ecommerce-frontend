import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext, UserContext, SellerContext } from "../context";
export default function Header() {
  const { login, customer_id, vendor_id } = useContext(UserContext);
  const { SellerData, setSellerData } = useContext(SellerContext);
  const { CartData } = useContext(CartContext);

  function isLoginedIn() {
    return localStorage.getItem("VendorToken") > -1;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand" href="#">
          Python MarketPlace
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MyAccount
              </a>
              <ul className="dropdown-menu">
                {login != "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/customer/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                )}
                {login != "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/customer/dashboard">
                        DashBoard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/logout">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seller Account
              </a>
              <ul className="dropdown-menu">
                {isLoginedIn() != "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/seller/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                )}
                {isLoginedIn() != "true" && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/seller/dashboard">
                        DashBoard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seller/logout">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer/orders">
                MyOrders(4)
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                CheckOut({CartData.length})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
