import SideBar from "./sideBar";

export default function ChangePassword(props) {
  return (
    <div className="container mt-4">
      <h3 className="text-center">Change Password</h3>
      <div className="row">
        <SideBar />
        <div className="col-md-8 col-12  ">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              Change Password
            </div>
            <div className="card-body">
              <form>
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

                <button type="submit" className="btn mt-3 center btn-primary">
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
