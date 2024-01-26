import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function OrderRow(props) {
  const [TotalDownloads, setTotalDownloads] = useState(
    props.item.product.downloads
  );
  const baseURL = "http://127.0.0.1:8000/api";

  function updateDownloads(product_id) {
    axios
      .post(baseURL + `/product/${product_id}/update-product-downloads/`)
      .then((response) => {
        setTotalDownloads(response.data.downloads);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>
        <Link>
          <img
            src={props.item.product.product_imgs[0].image}
            className="img-thumbnail"
            width={80}
          />
          <p>{props.item.product.title}</p>
        </Link>
      </td>
      <td>Rs.{props.item.product.price}</td>
      <td>
        {props.item.order.order_status && (
          <p className="text-success">
            <i className="fa  fa-check-circle"></i>Completed{" "}
          </p>
        )}
        {props.item.order.order_status == false && (
          <p className="text-warning">
            <i className="fa fa-check-circle"></i>In Process{" "}
          </p>
        )}
      </td>
      <td>
        {props.item.order.order_status && (
          <button className="btn btn-success">
            <i className="fa fa-download"></i>
            <a
              onClick={() => updateDownloads(props.item.product.id)}
              download
              target="_blank"
              href={props.item.product.file}
            >
              {`  Download`}
            </a>
            <span className="bg-white text-black px-1 ms-1 text-center">{`${TotalDownloads}`}</span>
          </button>
        )}
      </td>
    </tr>
  );
}
