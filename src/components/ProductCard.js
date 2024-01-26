import logo from "../logo.svg";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="card">
      <Link to={props.link}>
        <img className="card-img-top" src={logo} alt="Card image cap" />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          <Link to={props.link}>{props.title}</Link>
        </h4>
        <h5 className="card-title">
          Price: <span className="text-muted">Rs.500</span>
        </h5>
      </div>
      <div className="card-footer">
        <button title="Add to Cart" className="btn btn-success btn-md ms-1">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button title="Add to WishList" className="btn btn-danger btn-md ms-1">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
