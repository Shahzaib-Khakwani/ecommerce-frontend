import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import Home from "./components/home";
import Categories from "./components/categories";

import CategoryProduct from "./components/CategoryProduct";
import AllProduct from "./components/AllProduct";
import ProductDetail from "./components/ProductDetail";
import CheckOut from "./components/CheckOut";

import Register from "./components/customer/register";
import Login from "./components/customer/login";
import Dashbaord from "./components/customer/dashboard";
import Orders from "./components/customer/orders";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";
import WishList from "./components/customer/WishList";
import Profile from "./components/customer/profile";
import ChangePassword from "./components/customer/ChangePassword";
import AddressList from "./components/customer/AddressList";
import AddAddress from "./components/customer/AddAddress";

import SellerRegister from "./components/seller/sellerRegister";
import SellerLogin from "./components/seller/sellerLogin";
import SellerLogout from "./components/seller/sellerLogout";
import SellerProductList from "./components/seller/ProductList";
import SellerDashBoard from "./components/seller/sellerDashboard";
import SellerAddProduct from "./components/seller/SellerAddProduct";
import SellerOrders from "./components/seller/SellerOrders";
import Customers from "./components/seller/customers";
import SellerReport from "./components/seller/SellerReport";
import SellerChangePassword from "./components/seller/SellerChangePassword";
import SellerProfile from "./components/seller/SellerProfile";
import TagProduct from "./components/TagProducts";
import Logout from "./components/customer/logout";
import { CartContext, SellerContext } from "./context";
import ConfirmOrder from "./components/ConfirmOrder";
import UpdateAddress from "./components/customer/UpdateAddress";
function App() {
  const [CartData, setCartData] = useState(
    localStorage.getItem("cartData")
      ? JSON.parse(localStorage.getItem("cartData"))
      : []
  );
  const [SellerData, setSellerData] = useState(-1);
  return (
    <>
      <SellerContext.Provider
        value={{ SellerData: SellerData, setSellerData: setSellerData }}
      >
        <CartContext.Provider
          value={{ CartData: CartData, setCartData: setCartData }}
        >
          <Header />
          {/* <SellerLogin /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/confirm-order" element={<ConfirmOrder />} />
            {/*Customer path*/}
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/orderfailure" element={<OrderFailure />} />
            <Route path="/customer/wishlist" element={<WishList />} />
            <Route path="/customer/profile" element={<Profile />} />
            <Route
              path="/customer/changepassword"
              element={<ChangePassword />}
            />
            <Route path="/customer/address" element={<AddressList />} />
            <Route
              path="/customer/address/update-address/:addressId"
              element={<UpdateAddress />}
            />
            <Route path="/customer/add-address" element={<AddAddress />} />
            <Route path="/customer/register" element={<Register />} />
            <Route path="/customer/login" element={<Login />} />
            <Route path="/customer/logout" element={<Logout />} />
            <Route path="/customer/dashboard" element={<Dashbaord />} />
            <Route path="/customer/orders" element={<Orders />} />
            {/*Customer path End*/}

            {/*Vendor path*/}
            <Route path="/seller/register" element={<SellerRegister />} />
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller/logout" element={<SellerLogout />} />
            <Route path="/seller/dashboard" element={<SellerDashBoard />} />
            <Route path="/seller/products" element={<SellerProductList />} />
            <Route path="/seller/add-product" element={<SellerAddProduct />} />
            <Route path="/seller/orders" element={<SellerOrders />} />
            <Route path="/seller/customers" element={<Customers />} />
            <Route path="/seller/reports" element={<SellerReport />} />
            <Route
              path="/seller/changepassword"
              element={<SellerChangePassword />}
            />
            <Route path="/seller/profile" element={<SellerProfile />} />
            {/*Vendor path End*/}

            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:tag" element={<TagProduct />} />
            <Route
              path="/categories/:category_slug/:category_id"
              element={<CategoryProduct />}
            />
            <Route
              path="/products/:product_slug/:product_id"
              element={<ProductDetail />}
            />
          </Routes>
        </CartContext.Provider>
      </SellerContext.Provider>
    </>
  );
}

export default App;
