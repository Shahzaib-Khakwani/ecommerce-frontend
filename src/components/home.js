import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useState, useEffect } from "react";
import ProductCardOnline from "./ProductCardOnline";

function Home() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(baseUrl + "/latest-products/?fetch_limit=4");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <main>
      <div className="container mt-3">
        {/*Latest Product*/}
        <h4 className="mb-4">
          Lastest Product{" "}
          <Link to="/products" className="float-end btn btn-dark">
            View All Product<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h4>
        <div className="row mb-4">
          {Products &&
            Products.map((item) => {
              return (
                <div className="col-12 col-md-3 md-4">
                  <ProductCardOnline product={item} />
                </div>
              );
            })}
        </div>
        <hr></hr>

        {/*Popular Categories Product*/}
        <h4 className="mb-4">
          Popular Categories{" "}
          <Link to="/categories" className="float-end btn btn-dark">
            View All Categories<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h4>
        <div className="row mb-4">
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title">
                  Price: <span className="text-muted">Rs.500</span>
                </h5>
              </div>
              <div className="card-footer">
                <h5 className="">Product Downloads:3446</h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title">
                  Price: <span className="text-muted">Rs.500</span>
                </h5>
              </div>
              <div className="card-footer">
                <h5 className="">Product Downloads:3446</h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title">
                  Price: <span className="text-muted">Rs.500</span>
                </h5>
              </div>
              <div className="card-footer">
                <h5 className="">Product Downloads:3446</h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title">
                  Price: <span className="text-muted">Rs.500</span>
                </h5>
              </div>
              <div className="card-footer">
                <h5 className="">Product Downloads:3446</h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
        </div>
        {/*Popular Product End*/}
        <hr></hr>

        {/*Popular Seller*/}
        <h4 className="mb-4">
          Popular Categories{" "}
          <a href="#" className="float-end btn btn-dark">
            View All Seller<i className="fa-solid fa-arrow-right"></i>
          </a>
        </h4>
        <div className="row mb-4">
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Seller Name</h4>
              </div>
              <div className="card-footer">
                <h5 className="">
                  Popular Categories : <a href="#">PHP </a>
                  <a href="#">Python</a>
                </h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Seller Name</h4>
              </div>
              <div className="card-footer">
                <h5 className="">
                  Popular Categories : <a href="#">PHP </a>
                  <a href="#">Python</a>
                </h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Seller Name</h4>
              </div>
              <div className="card-footer">
                <h5 className="">
                  Popular Categories : <a href="#">PHP </a>
                  <a href="#">Python</a>
                </h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
          {/*Product Box*/}
          <div className="col-12 col-md-3 md-4">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">Seller Name</h4>
              </div>
              <div className="card-footer">
                <h5 className="">
                  Popular Categories : <a href="#">PHP </a>
                  <a href="#">Python</a>
                </h5>
              </div>
            </div>
          </div>
          {/*Product Box*/}
        </div>
        {/*Popular Seller End*/}
        {/*Review & Rating*/}
        <div
          id="carouselExampleIndicators"
          className="carousel slide my-5"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner p-4 bg-dark text-white">
            <div className="carousel-item ">
              <blockquote className="blockquote text-center">
                <p className="mb-4">Lorem i elit.</p>
                <footer className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  Rancho
                </footer>
              </blockquote>
            </div>
            <div className="carousel-item active">
              <blockquote className="blockquote text-center">
                <p className="mb-4">Lorem .</p>
                <footer className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  Rancho
                </footer>
              </blockquote>
            </div>
            <div className="carousel-item">
              <blockquote className="blockquote text-center">
                <p className="mb-4">elit.</p>
                <footer className="blockquote-footer">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  Rancho
                </footer>
              </blockquote>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/*Review & Rating End*/}
      </div>
    </main>
  );
}

export default Home;
