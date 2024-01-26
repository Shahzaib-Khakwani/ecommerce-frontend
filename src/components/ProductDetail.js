import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext, UserContext } from "../context";
import { Link } from "react-router-dom";
import ProductCardOnline from "./ProductCardOnline";
import axios from "axios";

function ProductDetail() {
  const baseUrl = "http://127.0.0.1:8000/api";

  const [ProductData, setProductData] = useState([]);
  const [RealtedProduct, setRelatedProduct] = useState([]);
  const [ProductImg, setProductImg] = useState([]);
  const [CartStatus, setCartStatus] = useState(false);
  const [WishListStatus, setWishListStatus] = useState(false);
  const [Tags, setTags] = useState([]);
  const { product_id } = useParams();
  const { CartData, setCartData } = useContext(CartContext);
  const { login, customer_id } = useContext(UserContext);

  useEffect(() => {
    fetchData(baseUrl + `/product/${product_id}`);
    fetchRelatedProductData(baseUrl + `/related-products/${product_id}`);
    checkAddCartButtonStatus();
    CheckProductInWishList();
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        setProductImg(data.product_imgs);
        setTags(data.tag_list);
      })
      .catch((error) => console.error("Error:", error));
  }
  function fetchRelatedProductData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setRelatedProduct(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  function checkAddCartButtonStatus() {
    let prevCartJSON = localStorage.getItem("cartData");
    let prevCart = JSON.parse(prevCartJSON);
    if (prevCart != null) {
      prevCart.map((cart) => {
        if (cart.product.product_id == product_id) {
          setCartStatus(true);
        }
      });
    }
  }

  function addCartHandler() {
    let cartData = {
      product: {
        product_id: ProductData.id,
        product_title: ProductData.title,
        product_price: ProductData.price,
        product_img: ProductImg[0].image,
      },
      user: {
        user_id: 1,
      },
    };

    let prevCartJSON = localStorage.getItem("cartData");
    let prevCart = JSON.parse(prevCartJSON) || [];

    if (prevCart.length > 0) {
      prevCart.push(cartData);
    } else {
      prevCart = [cartData];
    }

    setCartData(prevCart);
    let cartListJSON = JSON.stringify(prevCart);
    localStorage.setItem("cartData", cartListJSON);

    setCartStatus(true);
  }

  function removeCartHandler() {
    let prevCartJSON = localStorage.getItem("cartData");
    let prevCart = JSON.parse(prevCartJSON);
    prevCart.map((cart, index) => {
      if (cart.product.product_id === ProductData.id) {
        prevCart.splice(index, 1);
      }
    });
    setCartData(prevCart);
    let cartListJSON = JSON.stringify(prevCart);
    localStorage.setItem("cartData", cartListJSON);

    setCartStatus(false);
  }

  var tag_links = [];

  for (let i = 0; i < Tags.length; i++) {
    tag_links.push(
      <Link
        to={`/products/${Tags[i]}`}
        className="badge bg-dark text-white me-1 nav-link "
      >
        {Tags[i]}
      </Link>
    );
  }

  function addToWishList() {
    const formData = new FormData();
    formData.append("customer", customer_id);
    formData.append("product", ProductData.id);
    axios
      .post(baseUrl + "/wishlist/", formData)
      .then((response) => {
        setWishListStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function CheckProductInWishList() {
    const formData = new FormData();
    formData.append("customer", customer_id);
    formData.append("product", product_id);
    axios
      .post(baseUrl + "/check-in-wishlist/", formData)
      .then((response) => {
        console.log(response);
        if (response.data.bool == true) {
          setWishListStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col col-4">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade carousel-dark"
          >
            <div className="carousel-inner">
              {ProductImg &&
                ProductImg.map((image, index) => {
                  if (index === 0) {
                    return (
                      <div className="carousel-item active">
                        <img
                          src={image.image}
                          className="d-block w-100 mb-5"
                          alt={index}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="carousel-item ">
                        <img
                          src={image.image}
                          className="d-block w-100 mb-5"
                          alt={index}
                        />
                      </div>
                    );
                  }
                })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-8">
          <h3>{ProductData.title}</h3>
          <p>{ProductData.description}</p>
          <h5>Price: Rs.{ProductData.price}</h5>
          <p className="mt-3">
            <button title="Demo" className="btn btn-dark  ms-1">
              <a href={ProductData.demo_url} target="_blank">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Demo</span>
              </a>
            </button>
            {!CartStatus && (
              <button
                title="Add to Cart"
                type="button"
                className="btn btn-success btn-md ms-1"
                onClick={addCartHandler}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Add to Cart</span>
              </button>
            )}
            {CartStatus && (
              <button
                title="Remove from cart"
                type="button"
                className="btn btn-warning btn-md ms-1"
                onClick={removeCartHandler}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Remove From Cart</span>
              </button>
            )}

            <button title="Buy Now" className="btn btn-warning btn-md ms-1">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Buy Now</span>
            </button>
            {login && !WishListStatus ? (
              <button
                title="Add to WishList"
                className="btn btn-danger btn-md ms-1"
                onClick={addToWishList}
              >
                <i className="fa fa-heart"></i>
                <span>Add to WishList</span>
              </button>
            ) : (
              <button
                title="Add to WishList"
                className="btn btn-danger btn-md ms-1"
                disabled
              >
                <i className="fa fa-heart"></i>
                <span>Add to WishList</span>
              </button>
            )}
            {/* {login == null && (
              <button
                title="Add to WishList"
                className="btn btn-danger btn-md ms-1"
                disabled
              >
                <i className="fa fa-heart"></i>
                <span>Add to WishList</span>
              </button>
            )} */}
          </p>
          <hr />
          <h4>Tags</h4>
          <p className="mt-3">{tag_links}</p>
        </div>
      </div>
      <hr />
      <div>
        {/*Carousel Related Product*/}
        <div
          id="RelatedProductCarousel"
          className="carousel slide carousel-dark"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#RelatedProductCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#RelatedProductCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#RelatedProductCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="mt-5 mb-5">
            <h3>Related Products</h3>
          </div>
          <div className="carousel-inner">
            {RealtedProduct &&
              RealtedProduct.map((product, index) => {
                if (index === 0) {
                  return (
                    <div className="row">
                      <div className="carousel-item active">
                        <div className="col-12 col-md-3 md-4">
                          <ProductCardOnline product={product} />
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="row">
                      <div className="carousel-item ">
                        <div className="col-12 col-md-3 md-4">
                          <ProductCardOnline product={product} />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#RelatedProductCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#RelatedProductCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* End Carousel Related Product*/}
    </section>
  );
}

export default ProductDetail;
