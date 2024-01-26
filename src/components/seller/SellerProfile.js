import SideBar from "./sideBar";

export default function SellerProfile(props) {
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
                    id="FirstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label for="LastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label for="UserName">UserName</label>
                  <input
                    type="text"
                    className="form-control"
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
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <label for="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn mt-3 btn-primary">
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
