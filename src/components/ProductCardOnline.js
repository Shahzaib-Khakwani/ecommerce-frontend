import logo from "../logo.svg";
import { Link } from "react-router-dom";

function ProductCardOnline(props) {
  return (
    <div className="col-md-8  col-12">
      <div className="card">
        <Link to={`/products/${props.product.title}/${props.product.id}`}>
          <img
            className="card-img-top"
            src={props.product.product_imgs[0].image}
            alt="Card image cap"
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/products/${props.product.title}/${props.product.id}`}>
              {props.product.title}
            </Link>
          </h4>
          <h5 className="card-title">
            Price: <span className="text-muted">Rs.{props.product.price}</span>
          </h5>
        </div>
        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-success btn-md ms-1">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button
            title="Add to WishList"
            className="btn btn-danger btn-md ms-1"
          >
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardOnline;
