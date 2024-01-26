import logo from "../logo.svg";
import ProductCardOnline from "./ProductCardOnline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function AllProduct() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Products, setProducts] = useState([]);
  const [TotalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/products");
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
      <li class="page-item">
        <Link
          class="page-link"
          onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          to={`/products/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <main>
      <div className="container mt-3">
        {/*Popular Categories Product*/}
        <h4 className="mb-4">All Product</h4>
        <div className="row mb-4">
          {/*Product Box*/}

          {Products &&
            Products.map((product) => (
              <div className="col-12 col-md-3 md-5">
                <ProductCardOnline product={product} />
              </div>
            ))}

          {/* <ProductCard title="Python" link={"python/1"} /> */}

          {/*Product Box*/}
        </div>
        {/*Popular Product End*/}
        {/*Pagination*/}
        <nav aria-label="Page navigation example">
          <ul class="pagination">{links}</ul>
        </nav>
        {/*Pagination ENd*/}
      </div>
    </main>
  );
}

export default AllProduct;
