import { Link } from "react-router-dom";
import SideBar from "./sideBar";

export default function SellerDashBaord(props) {
  return (
    <div className="container mt-4">
      <h1>Reports</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Monthly Report</h3>
                </div>
                <div className="text-center card-body">
                  <Link className="btn btn-primary btn-sm">
                    <h5>View</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Weekly Report</h3>
                </div>
                <div className="text-center card-body">
                  <Link className="btn btn-primary btn-sm">
                    <h5>View</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Yearly Report</h3>
                </div>
                <div className="text-center card-body">
                  <Link className="btn btn-primary btn-sm">
                    <h5>View</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
