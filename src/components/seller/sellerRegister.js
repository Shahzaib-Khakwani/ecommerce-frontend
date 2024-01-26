import { useState, useContext } from "react";
import axios from "axios";
import { SellerContext } from "../../context";

export default function SellerRegister(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const { SellerData, setSellerData } = useContext(SellerContext);

  const [RegisterData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    address: "",
    email: "",
    password: "",
  });

  function inputHandler(event) {
    setRegisterData({
      ...RegisterData,
      [event.target.name]: event.target.value,
    });
  }

  var enabled =
    RegisterData.username != "" &&
    RegisterData.password != "" &&
    RegisterData.first_name != "" &&
    RegisterData.last_name != "" &&
    RegisterData.address != "" &&
    RegisterData.email != "";

  function sumbitHandler() {
    let form = new FormData();
    form.append("first_name", RegisterData.first_name);
    form.append("last_name", RegisterData.last_name);
    form.append("username", RegisterData.username);
    form.append("address", RegisterData.address);
    form.append("email", RegisterData.email);
    form.append("password", RegisterData.password);
    axios
      .post(baseUrl + "vendor/register/", form)
      .then((response) => {
        console.log(response);
        if (response.data.auth == true) {
          setSellerData(response.data.vendor);
          console.log(SellerData);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-4">
      <h3>Seller Register</h3>
      <div className="row">
        <div className="col-md-8 col-12  offset-2">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              Register
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="FirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={RegisterData.firstName}
                    onChange={inputHandler}
                    id="FirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label for="LastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={RegisterData.lastName}
                    onChange={inputHandler}
                    id="LastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label for="UserName">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={RegisterData.username}
                    onChange={inputHandler}
                    id="UserName"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label for="UserName">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={RegisterData.address}
                    onChange={inputHandler}
                    id="Address"
                    placeholder="Add Address"
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={RegisterData.email}
                    onChange={inputHandler}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={RegisterData.password}
                    onChange={inputHandler}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                {!enabled ? (
                  <button
                    disabled
                    type="button"
                    className="btn mt-3 btn-primary"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={sumbitHandler}
                    className="btn mt-3 btn-primary"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
