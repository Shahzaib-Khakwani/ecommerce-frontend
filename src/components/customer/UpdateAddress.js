import axios from "axios";
import { UserContext } from "../../context";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SideBar from "./sideBar";
export default function UpdateAddress(props) {
  const { login, customer_id } = useContext(UserContext);
  const [CustomerAddress, setCustomerAddress] = useState("");
  let { addressId } = useParams();

  const [Message, setMessage] = useState({
    error: "",
    success: "",
  });
  const [SuccessMsg, setSuccessMsg] = useState("");
  const baseUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetchData(baseUrl + "/customer-address/" + addressId);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCustomerAddress(data.address);
      })
      .catch((error) => console.error("Error:", error));
  }

  function inputHandler(e) {
    setCustomerAddress(e.target.value);
  }

  function submitHandler() {
    const formUserData = new FormData();
    formUserData.append("address", CustomerAddress);
    formUserData.append("customer", customer_id);

    axios
      .put(baseUrl + "/customer-address/" + addressId + "/", formUserData)
      .then((response) => {
        if (response.status != 200) {
          setMessage({
            error: "Cant update your address",
            success: "",
          });
        } else {
          setMessage({
            success: "Address is Updated!",
            error: "",
          });
          setCustomerAddress("");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-4">
      <h3>Update Address</h3>
      <div className="row">
        <SideBar />
        <div className="col-md-8 col-12">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              Add Address
            </div>
            <div className="card-body">
              {Message.error != "" && <p>{Message.error}</p>}
              {Message.success != "" && <p>{Message.success}</p>}
              <form>
                <div className="form-group">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={CustomerAddress}
                    onChange={(e) => inputHandler(e)}
                    aria-describedby="emailHelp"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={submitHandler}
                    className="btn mt-3  btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
