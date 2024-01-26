import { Link } from "react-router-dom";
import SideBar from "./sideBar";

export default function SellerDashBaord(props) {
  return (
    <div className="container mt-4">
      <h1>Dashboard</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Total Orders</h3>
                </div>
                <div className="text-center card-body">
                  <Link>
                    <h4>43</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Total Customers</h3>
                </div>
                <div className="text-center card-body">
                  <Link>
                    <h4>43</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="card">
                <div className="card-head text-center bg-secondary text-white py-2">
                  <h3>Sales</h3>
                </div>
                <div className="text-center card-body">
                  <Link>
                    <h4>43</h4>
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
