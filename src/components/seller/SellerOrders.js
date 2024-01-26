import cat from "../../cat.png";
import cat2 from "../../cat2.png";
import cat3 from "../../cat3.png";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

export default function SellerOrders(props) {
  return (
    <div className="container mt-4">
      <h1>Orders</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="table-responsive">
            <div className="table bordered-table table-lg">
              <thead>
                <tr>
                  <th># </th>
                  <th>Product </th>
                  <th>Price </th>
                  <th>Status </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link>
                      <img src={cat2} className="img-thumbnail" width={80} />
                      <p>Django</p>
                    </Link>
                  </td>
                  <td>Rs.500</td>
                  <td className="text-success">
                    <i className="fa fa-check-circle"></i>Completed
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="btn btn-primary dropdown-toggle btn-sm"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Approve
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sent
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <Link>
                      <img src={cat} className="img-thumbnail" width={80} />
                      <p>Django</p>
                    </Link>
                  </td>
                  <td>Rs.500</td>
                  <td className="text-success">
                    <i className="fa fa-check-circle"></i>Completed
                  </td>
                  <td>
                    <div className="dropdown">
                      <a
                        className="btn btn-primary dropdown-toggle btn-sm"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Approve
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sent
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
