import SideBar from "./sideBar";
import { Link } from "react-router-dom";

export default function Customers(props) {
  return (
    <div className="container mt-4">
      <h1>Customers</h1>
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-12">
          <div className="table-responsive">
            <div className="table bordered-table table-lg">
              <thead>
                <tr>
                  <th># </th>
                  <th>Name </th>
                  <th>Email </th>
                  <th>Mobile </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>John@doe.com</td>
                  <td className="text-success">12234854</td>
                  <td>
                    <Link className="btn btn-danger btn-sm">Delete</Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Walter Issacson</td>
                  <td>Walter@Issacson.com</td>
                  <td className="text-success">12234854</td>
                  <td>
                    <Link className="btn btn-danger btn-sm">Delete</Link>
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
