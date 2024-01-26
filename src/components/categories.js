import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Categories() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [Categories, setCategories] = useState([]);
  const [TotalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/categories");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.result);
        setTotalResult(data.count);
      })
      .catch((error) => console.error("Error:", error));
  }

  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  var links = [];
  var limit = 1;
  var totalLinks = TotalResult / limit;
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li class="page-item">
        <Link
          class="page-link"
          onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
          to={`/categories/?page=${i}`}
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
        <h4 className="mb-4">Popular Categories </h4>
        <div className="row mb-4">
          {Categories &&
            Categories.map((category) => (
              <div className="col-12 col-md-3 md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={logo}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {console.log(category.id)}
                      <Link to={`/categories/${category.title}/${category.id}`}>
                        {console.log(category.id)}
                        {category.title}
                      </Link>
                    </h4>
                    <h5 className="card-title">
                      Price: <span className="text-muted">Rs.500</span>
                    </h5>
                  </div>
                  <div className="card-footer">
                    <h5 className="">Product Downloads:3446</h5>
                  </div>
                </div>
              </div>
            ))}
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

export default Categories;
