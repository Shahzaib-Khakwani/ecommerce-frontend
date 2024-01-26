import SideBar from "./sideBar";
import { SellerContext } from "../../context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function SellerAddProduct(props) {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const { SellerData } = useContext(SellerContext);
  const [Categories, setCategories] = useState([]);
  const [ProductID, setProductID] = useState(-3);

  const [ProductForm, setProductForm] = useState({
    Vendor: "",
    ProductCategory: "",
    title: "",
    description: "",
    image: "",
    tags: "",
    price: "",
    demo_url: "",
    file: "",
  });

  useEffect(() => {
    fetchData(baseUrl + "categories/");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => console.error("Error:", error));
  }

  function inputHandler(event) {
    setProductForm({
      ...ProductForm,
      [event.target.name]: event.target.value,
    });
  }
  function fileHandler(event) {
    setProductForm({
      ...ProductForm,
      [event.target.name]: event.target.files[0],
    });
  }

  async function submitHandler() {
    // setProductForm({
    //   ...ProductForm,
    //   Vendor: SellerData,
    // });
    const form = new FormData();
    form.append("title", ProductForm.title);
    form.append("description", ProductForm.description);
    form.append("Vendor", localStorage.getItem("VendorToken"));
    form.append("ProductCategory", ProductForm.ProductCategory);
    console.log(ProductForm.tags);
    form.append("tags", ProductForm.tags);
    form.append("price", ProductForm.price);
    form.append("demo_url", ProductForm.demo_url);
    form.append("file", ProductForm.file);

    const response = await axios.post(baseUrl + "products/", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    const productID = response.data.id;
    setProductID(productID);

    await addImage(productID);
  }

  function addImage(p_id) {
    const form1 = new FormData();
    form1.append("pk", p_id);
    form1.append("image", ProductForm.image);

    axios
      .post(baseUrl + "product/add-img", form1, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(SellerData);

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>
      <div className="row">
        <SideBar />
        <div className="col-md-8 col-12">
          <div className="card">
            <div className="card-head text-center text-white bg-secondary py-2 ">
              Product Details
            </div>
            <div className="card-body">
              <form encType="multipart/form-data">
                <div className="form-group">
                  <label for="ProductCategory"> Category </label>
                  <select
                    name="ProductCategory"
                    id="ProductCategory"
                    className="from-control  ms-2"
                    onChange={inputHandler}
                  >
                    {Categories.map((category) => (
                      <option value={category.id}>{category.title}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label for="title"> Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={ProductForm.title}
                    onChange={inputHandler}
                    placeholder="title"
                  />
                </div>
                <div className="form-group">
                  <label for="Description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Description"
                    name="description"
                    value={ProductForm.description}
                    onChange={inputHandler}
                    placeholder="Description"
                  />
                </div>
                <div className="form-group">
                  <label for="Price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={ProductForm.price}
                    onChange={inputHandler}
                    name="price"
                    id="Price"
                    placeholder="Price"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Tags(comma separated)
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="tags"
                    onChange={inputHandler}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label for="demo_url">Demo Url</label>
                  <input
                    type="url"
                    className="form-control"
                    value={ProductForm.demo_url}
                    onChange={inputHandler}
                    name="demo_url"
                    id="demo_url"
                    placeholder="Demo Url"
                  />
                </div>
                <div className="mb-3">
                  <label for="Featured_Image" className="form-label">
                    Fetured Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="Featured_Image"
                    name="image"
                    onChange={fileHandler}
                  />
                </div>
                <div className="mb-3">
                  <label for="formFile" className="form-label">
                    Product File
                  </label>
                  <input
                    className="form-control"
                    name="file"
                    onChange={fileHandler}
                    type="file"
                    id="formFile"
                  />
                </div>

                <button
                  type="button"
                  onClick={submitHandler}
                  className="btn mt-3 btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
