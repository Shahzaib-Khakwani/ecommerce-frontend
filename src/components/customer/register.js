import { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [RegisterFromData, setRegisterFromData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [FormError, setFormError] = useState(false);
  const [Msg, setMsg] = useState("");

  const inputHandler = (event) => {
    setRegisterFromData({
      ...RegisterFromData,
      [event.target.name]: event.target.value,
    });
  };
  const sumbitHandler = (event) => {
    const form = new FormData();
    form.append("first_name", RegisterFromData.first_name);
    form.append("last_name", RegisterFromData.last_name);
    form.append("username", RegisterFromData.username);
    form.append("email", RegisterFromData.email);
    form.append("mobile", RegisterFromData.mobile);
    form.append("password", RegisterFromData.password);

    axios
      .post(baseUrl + "customer/register/", form)
      .then((data) => {
        if (data.data.auth == false) {
          setFormError(true);
          setMsg(data.data.msg);
        } else {
          setFormError(false);
          setMsg("");
          window.location.href = "/customer/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var enabled =
    RegisterFromData.username != "" &&
    RegisterFromData.password != "" &&
    RegisterFromData.first_name != "" &&
    RegisterFromData.last_name != "" &&
    RegisterFromData.mobile != "" &&
    RegisterFromData.email != "";

  return (
    <div className="container mt-4">
      <h3>Register</h3>
      <div className="row">
        <div className="col-md-8 col-12  offset-2">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              Register
            </div>
            <div className="card-body">
              <h6 className="text-danger">{FormError && Msg}</h6>
              <p className="text-muted">All Fields are Required</p>
              <form>
                <div className="form-group">
                  <label for="FirstName">First Name</label>
                  <input
                    type="text"
                    onChange={inputHandler}
                    value={RegisterFromData.first_name}
                    name="first_name"
                    className="form-control"
                    id="FirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label for="LastName">Last Name</label>
                  <input
                    type="text"
                    onChange={inputHandler}
                    value={RegisterFromData.last_name}
                    name="last_name"
                    className="form-control"
                    id="LastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label for="UserName">UserName</label>
                  <input
                    type="text"
                    onChange={inputHandler}
                    value={RegisterFromData.username}
                    name="username"
                    className="form-control"
                    id="UserName"
                    placeholder="User Name"
                  />
                </div>

                <div className="form-group">
                  <label for="Mobile">Mobile</label>
                  <input
                    type="number"
                    onChange={inputHandler}
                    value={RegisterFromData.mobile}
                    name="mobile"
                    className="form-control"
                    id="Mobile"
                    aria-describedby="emailHelp"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    onChange={inputHandler}
                    value={RegisterFromData.email}
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    onChange={inputHandler}
                    value={RegisterFromData.password}
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <button
                  type="button"
                  disabled={!enabled}
                  onClick={sumbitHandler}
                  className="btn mt-3 btn-primary"
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
