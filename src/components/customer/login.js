import { useState } from "react";
import axios from "axios";

function Login(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";

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
      .post(baseUrl + "customer/login/", form)
      .then((data) => {
        if (data.data.auth == false) {
          setFormError(true);
          setErrorMsg(data.data.msg);
        } else {
          localStorage.setItem("customer_login", true);
          localStorage.setItem("customer_id", data.data.id);
          setFormError(false);
          setErrorMsg(data.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const check_user = localStorage.getItem("customer_login");
  if (check_user) {
    window.location.href = "/customer/dashboard";
  }

  var enabled = LoginFromData.username != "" && LoginFromData.password != "";
  return (
    <div className="container mt-4">
      <h3>Login</h3>
      <div className="row">
        <div className="col-md-8 col-12  offset-2">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              LogIn
            </div>
            <div className="card-body">
              <p className="text-danger">{FormError && ErrorMsg}</p>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    name="username"
                    onChange={inputHandler}
                    value={LoginFromData.username}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    name="password"
                    onChange={inputHandler}
                    value={LoginFromData.password}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button
                  onClick={sumbitHandler}
                  type="button"
                  className="btn mt-3 center btn-primary"
                  disabled={!enabled}
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

export default Login;
