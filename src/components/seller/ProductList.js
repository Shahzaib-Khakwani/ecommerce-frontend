import { Link } from "react-router-dom";
import SideBar from "./sideBar";

export default function ProductList(props) {
  return (
    <div className="container mt-4">
      <h1>Product List</h1>
      <div className="row">
        <SideBar />

        <div className="col-md-9 col-12">
          <div className="row">
            <h3>
              <Link to="/seller/add-product" className="btn btn-primary">
                <i className="fa fa-plus-circle"></i> Add Product
              </Link>
            </h3>
          </div>
          <div className="row">
            <div className="table-responsive">
              <div className="table bordered-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Python</td>
                    <td>Rs.500</td>
                    <td>
                      <Link className="btn btn-info">View</Link>
                      <Link className="btn btn-warning ms-1">Edit</Link>
                      <Link className="btn btn-danger ms-1">Delete</Link>
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
