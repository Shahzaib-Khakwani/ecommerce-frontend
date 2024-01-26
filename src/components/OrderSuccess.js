import { Link } from "react-router-dom";

export default function OrderSuccess(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-2">
          <div className="card">
            <div className="card-body text-success text-center">
              <i className="fa fa-check"></i>
              <h3 className="mt-1">Order Success</h3>
            </div>
            <div className="my-2 text-center">
              <Link className="btn btn-primary ">Continue Shopping</Link>
              <Link className="btn btn-success ms-2 " to="/ordersuccess">
                Proceed TO Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
