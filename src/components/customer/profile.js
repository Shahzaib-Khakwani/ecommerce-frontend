import SideBar from "./sideBar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";
import axios from "axios";

export default function Profile(props) {
  const baseUrl = "http://127.0.0.1:8000/api";
  const { login, customer_id } = useContext(UserContext);

  const [ProfileData, setProfileData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    profile_img: "",
  });

  useEffect(() => {
    fetchData(baseUrl + "/customer/" + customer_id);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProfileData({
          user_id: data.user.id,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          username: data.user.username,
          email: data.user.email,
          mobile: data.mobile,
          profile_img: data.profile_img,
        });
      })
      .catch((error) => console.error("Error:", error));
  }

  function inputHandler(event) {
    setProfileData({
      ...ProfileData,
      [event.target.name]: event.target.value,
    });
  }
  function imageFileHandler(event) {
    setProfileData({
      ...ProfileData,
      profile_img: event.target.files[0],
    });
  }

  function submitForm() {
    const formUserData = new FormData();
    formUserData.append("first_name", ProfileData.first_name);
    formUserData.append("last_name", ProfileData.last_name);
    formUserData.append("email", ProfileData.email);
    formUserData.append("username", ProfileData.username);
    const formData = new FormData();
    formData.append("user", ProfileData.user_id);
    formData.append("mobile", ProfileData.mobile);
    formData.append("profile_img", ProfileData.profile_img);
    axios
      .put(baseUrl + "/user/" + ProfileData.user_id, formUserData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));

    axios
      .put(baseUrl + "/customer/" + customer_id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-4">
      <h3 className="text-center">Profile</h3>
      <div className="row">
        <SideBar />
        <div className="col-md-8 col-12">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2  ">
              Profile
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="FirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={ProfileData.first_name}
                    onChange={(e) => inputHandler(e)}
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
                    value={ProfileData.last_name}
                    onChange={(e) => inputHandler(e)}
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
                    value={ProfileData.username}
                    onChange={(e) => inputHandler(e)}
                    id="UserName"
                    placeholder="User Name"
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="email"
                    value={ProfileData.email}
                    onChange={(e) => inputHandler(e)}
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    id="exampleInputMobile1"
                    value={ProfileData.mobile}
                    onChange={(e) => inputHandler(e)}
                    placeholder="mobile number"
                  />
                </div>

                <div className="mb-3">
                  <div className="my-2">
                    {
                      <img
                        src={ProfileData.profile_img}
                        className="thumbnail-img rounded"
                        width={100}
                        height={100}
                        alt=""
                      />
                    }
                  </div>
                  <input
                    onChange={(e) => imageFileHandler(e)}
                    className="form-control"
                    name="profile_img"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={submitForm}
                    className="btn mt-3 btn-primary"
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
