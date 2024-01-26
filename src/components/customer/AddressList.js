import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./sideBar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";

export default function AddressList(props) {
  const { login, customer_id } = useContext(UserContext);
  const baseUrl = "http://127.0.0.1:8000/api";
  const [CustomerAddress, setCustomerAddress] = useState([]);
  const [DefaultAddress, setDefaultAddress] = useState();

  useEffect(() => {
    fetchData(baseUrl + "/customer/" + customer_id + "/address/");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCustomerAddress(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  function DefaultAddressHandler(address_id) {
    axios
      .put(baseUrl + "/customer/mark-default-address/" + address_id)
      .then((response) => {
        if (response.data.bool) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-outline-success float-end">
                <i className="fa fa-plus-circle"></i>{" "}
                <Link to="/customer/add-address">Add Address</Link>
              </button>
            </div>
          </div>
          <div className="row mt-3">
            {CustomerAddress &&
              CustomerAddress.map((address, index) => {
                return address.default_address ? (
                  <div className="col-md-4 col-12 my-2">
                    <div className="card">
                      <div className="text-center card-body bg-secondary ">
                        <h5>
                          <i className="fa fa-check-circle"></i>
                          {address.address}
                        </h5>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-4 col-12 my-2">
                    <div className="card">
                      <div className="text-center card-body">
                        <span
                          onClick={() => DefaultAddressHandler(address.id)}
                          className="badge bg-black "
                          role="button"
                        >
                          Mark as Default
                        </span>
                        <h5>
                          <Link to={`update-address/${address.id}`}>
                            house no.4, st no.7, islamabad
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
