import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import { UserContext } from "../../context";

export default function Dashbaord(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const { login, customer_id } = useContext(UserContext);
  const [DashBoardCount, setDashBoardCount] = useState({
    totalOrders: 0,
    totalWishlist: 0,
    totalAddresses: 0,
  });

  useEffect(() => {
    fetchData(baseUrl + "/customer/dashboard/" + customer_id);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDashBoardCount({
          totalOrders: data.totalOrders,
          totalWishlist: data.totalWishlist,
          totalAddresses: data.totalAddresses,
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Total Orders</h3>
                </div>
                <div className="text-center card-body">
                  <Link to="/customer/orders">
                    <h4>{DashBoardCount.totalOrders}</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Total WishList</h3>
                </div>
                <div className="text-center card-body">
                  <Link to="/customer/wishlist">
                    <h4>{DashBoardCount.totalWishlist}</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Address</h3>
                </div>
                <div className="text-center card-body">
                  <Link to="/customer/address">
                    <h4>{DashBoardCount.totalAddresses}</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
