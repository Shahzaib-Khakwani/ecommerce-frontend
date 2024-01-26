import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { SellerContext } from "../../context";

export default function SellerLogin(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const { SellerData, setSellerData } = useContext(SellerContext);

  const [LoginFromData, setLoginFromData] = useState({
    username: "",
    password: "",
  });
  const [FormError, setFormError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");

  const inputHandler = (event) => {
    setLoginFromData({
      ...LoginFromData,
      [event.target.name]: event.target.value,
    });
  };
  const sumbitHandler = (event) => {
    const form = new FormData();
    form.append("username", LoginFromData.username);
    form.append("password", LoginFromData.password);

    axios
      .post(baseUrl + "vendor/login/", form)
      .then((response) => {
        if (response.data.auth == true) {
          localStorage.setItem("VendorToken", response.data.id);
        } else {
          setFormError(true);
          setErrorMsg(response.data.msg);
        }
        // if (data.data.auth == false) {
        //   setFormError(true);
        //   setErrorMsg(data.data.msg);
        // } else {
        //   setSellerData(data.data.id);
        //   setFormError(false);
        //   setErrorMsg("");
        //   checkSeller();
        // }
      })
      .catch((error) => {
        console.log(error);
      });
    if (localStorage.getItem("VendorToken") > 0) {
      window.location.href = "/seller/dashboard";
    }
  };

  // useEffect(() => {

  // });

  return (
    <div className="container mt-4">
      <h3>Seller Login</h3>
      <div className="row">
        <div className="col-md-8 col-12  offset-2">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              LogIn
            </div>
            <div className="card-body">
              {FormError && <p className="text-danger">{ErrorMsg}</p>}
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="username"
                    onChange={inputHandler}
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
                    onChange={inputHandler}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="button"
                  onClick={sumbitHandler}
                  className="btn mt-3 center btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
