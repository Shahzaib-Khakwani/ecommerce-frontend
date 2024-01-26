import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className="col-md-3 col-12">
      <ul class="list-group">
        <li class="list-group-item">
          <Link to="/seller/dashboard">DashBoard</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/products">Products</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/add-product">Add Product</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/orders">Orders</Link>
        </li>

        <li class="list-group-item ">
          <Link to="/seller/customers">Customers</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/reports">Reports</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/changepassword">Change Password</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/seller/profile">Profile</Link>
        </li>

        <li class="list-group-item text-danger">Logout</li>
      </ul>
    </div>
  );
}
