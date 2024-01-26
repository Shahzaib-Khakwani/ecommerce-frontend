import { Link } from "react-router-dom";
import cat from "../../cat.png";
import cat2 from "../../cat2.png";
import cat3 from "../../cat3.png";
import SideBar from "./sideBar";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context";
import axios from "axios";

export default function WishList() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [WishlistItems, setWishlistItems] = useState([]);
  const [Render, setRender] = useState(false);
  const { login, customer_id } = useContext(UserContext);

  useEffect(() => {
    fetchData(baseUrl + `/customer/${customer_id}/wishlist`);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setWishlistItems(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  function removeWishlistHandler(product_id) {
    const formData = new FormData();
    formData.append("product", product_id);
    formData.append("customer", customer_id);
    axios
      .post(baseUrl + "/remove-wishlist/", formData)
      .then((response) => {
        if (response.data.bool == true) {
          document.getElementById(`row${product_id}`).remove();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4">ALl Products(4)</h3>
      <div className="row">
        <SideBar />
        <div className="col-md-8 col-12">
          <div className="table-responsive">
            <div className="table table-bordered table-lg">
              <thead>
                <tr>
                  <th># </th>
                  <th>Product </th>
                  <th>Price </th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {WishlistItems &&
                  WishlistItems.map((item, index) => {
                    return (
                      <tr id={`row${item.product.id}`}>
                        <td>{index + 1}</td>
                        <td>
                          <Link>
                            {console.log(item.product.product_imgs[0].image)}
                            <img
                              // src={item.product.product_imgs[1].image}
                              className="img-thumbnail"
                              width={80}
                            />
                            <p>{item.product.title}</p>
                          </Link>
                        </td>
                        <td>Rs.{item.product.price}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-warning btn-md"
                            onClick={() =>
                              removeWishlistHandler(item.product.id)
                            }
                          >
                            <span>
                              <li className="fa fa-times text-white"></li>
                            </span>
                            Remove from Wishlist
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
