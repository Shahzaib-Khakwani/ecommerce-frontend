import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context";

function CheckOut(props) {
  const { CartData, setCartData } = useContext(CartContext);

  function removeCartHandler(product_id) {
    let prevCartJSON = localStorage.getItem("cartData");
    let prevCart = JSON.parse(prevCartJSON);
    prevCart.map((cart, index) => {
      if (cart.product.product_id == product_id) {
        prevCart.splice(index, 1);
      }
    });
    let cartListJSON = JSON.stringify(prevCart);
    localStorage.setItem("cartData", cartListJSON);
    setCartData(prevCart);
  }

  var sum = 0;
  CartData.map((cart) => {
    sum += cart.product.product_price;
  });

  return (
    <div className="container mt-4">
      <h3 className="mb-4">ALl Products(4)</h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <div className="table table-bordered table-lg">
              <thead>
                <tr>
                  <th># </th>
                  <th>Product </th>
                  <th>Price </th>
                </tr>
              </thead>
              <tbody>
                {CartData &&
                  CartData.map((product, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <Link>
                            <img
                              src={product.product.product_img}
                              className="img-thumbnail"
                              width={80}
                            />
                            <p>{product.product.product_title}</p>
                          </Link>
                        </td>
                        <td>Rs.{product.product.product_price}</td>
                        <td>
                          <button
                            title="Remove from cart"
                            type="button"
                            className="btn btn-warning btn-md ms-1"
                            onClick={() =>
                              removeCartHandler(product.product.product_id)
                            }
                          >
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>Remove From Cart</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                <tr>
                  <td> </td>
                  <td>Total</td>
                  <td>Rs.{sum}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={3} className="my-3">
                    <Link className="btn btn-primary ">Continue Shopping</Link>
                    {CartData.length > 0 ? (
                      <Link to={"/confirm-order"} className="btn btn-success ">
                        Procced to Payment
                      </Link>
                    ) : null}
                  </th>
                </tr>
              </tfoot>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
