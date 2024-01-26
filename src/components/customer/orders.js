import SideBar from "./sideBar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../src/context";
import OrderRow from "./OrderRow";

export default function Orders() {
  const { login, customer_id } = useContext(UserContext);
  const [OrderData, setOrderData] = useState([]);
  const baseUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetchData(baseUrl + `/customer/${customer_id}/orders/`);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setOrderData(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="table-responsive">
            <div className="table table-bordered table-lg">
              <thead>
                <tr>
                  <th># </th>
                  <th>Product </th>
                  <th>Price </th>
                  <th>Status </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {OrderData &&
                  OrderData.map((item, index) => {
                    return <OrderRow item={item} index={index} />;
                  })}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
