import logo from "../logo.svg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function TagProduct() {
  const baseUrl = "http://127.0.0.1:8000/api";

  const [Products, setProducts] = useState([]);
  const [TotalResult, setTotalResult] = useState(0);

  const { tag } = useParams();

  useEffect(() => {
    fetchData(baseUrl + `/products/${tag}`);
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.result);
        setTotalResult(data.count);
      })
      .catch((error) => console.error("Error:", error));
  }

  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  var links = [];

  for (let i = 1; i <= TotalResult; i++) {
    links.push(
      <li className="page-item">
        <Link
          className="page-link"
          onClick={() => changeUrl(`${baseUrl}/products/${tag}?page=${i}`)}
          to={`/products/${tag}?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <main>
      <div className="container mt-3">
        {/*Tag Product*/}
        <h4 className="mb-4">All Product</h4>
        <div className="row mb-4">
          {/*Product Box*/}

          {Products &&
            Products.map((product) => (
              <div className="col-12 col-md-3 md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={product.product_imgs[0].image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to={`/products/${product.title}/${product.id}`}>
                        {product.title}
                      </Link>
                    </h4>
                    <h5 className="card-title">
                      Price:{" "}
                      <span className="text-muted">Rs.{product.price}</span>
                    </h5>
                  </div>
                  <div className="card-footer">
                    <h5 className="">Product Downloads:3446</h5>
                  </div>
                </div>
              </div>
            ))}

          {/* <ProductCard title="Python" link={"python/1"} /> */}

          {/*Product Box*/}
        </div>
        {/*Popular Product End*/}
        {/*Pagination*/}
        <nav aria-label="Page navigation example">
          <ul className="pagination">{links}</ul>
        </nav>
        {/*Pagination ENd*/}
      </div>
    </main>
  );
}

export default TagProduct;
