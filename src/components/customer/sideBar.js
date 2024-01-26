import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div className="col-md-3 col-12">
      <ul class="list-group">
        <li class="list-group-item">
          <Link to="/customer/dashboard">DashBoard</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/customer/orders">Orders</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/customer/wishlist">Wishlist</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/customer/profile">Profile</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/customer/changepassword">Change Password</Link>
        </li>
        <li class="list-group-item ">
          <Link to="/customer/address">Addresses</Link>
        </li>

        <li class="list-group-item text-danger">Logout</li>
      </ul>
    </div>
  );
}
