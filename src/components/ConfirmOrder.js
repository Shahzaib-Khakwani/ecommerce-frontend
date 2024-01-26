import { useState, useContext, useEffect } from "react";
import { UserContext, CartContext } from "../context";
import axios from "axios";

export default function ConfirmOrder() {
  const baseURL = "http://127.0.0.1:8000/api/";
  const { login, customer_id } = useContext(UserContext);
  const { CartData, setCartData } = useContext(CartContext);
  const [Executed, setExecuted] = useState(false);
  const [Payment, setPayment] = useState("");
  const [OrderID, setOrderID] = useState("");

  const fetchData = async () => {
    if (!login) {
      window.location.href = "/customer/login";
      return;
    }

    try {
      const orderResponse = await axios.post(baseURL + "orders/", {
        customer: customer_id,
      });
      const OrderID = orderResponse.data.id;
      setOrderID(OrderID);

      const promises = CartData.map((item) => {
        const formData = new FormData();
        formData.append("order", OrderID);
        formData.append("product", item.product.product_id);
        formData.append("quantity", 1);
        formData.append("price", item.product.product_price);

        return axios.post(baseURL + "order-items/", formData);
      });

      await Promise.all(promises);

      localStorage.removeItem("cartData");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!Executed) {
      fetchData();
    }
    setExecuted(true);

    setCartData([]);
  }, []);

  function ChangePaymentMethode(payment) {
    setPayment(payment);
  }
  function PAymentButton() {
    if (Payment != "") {
      ChangePaymentMethode(Payment);
      window.location.href = "/customer/orders";
    } else {
      alert("Please Select Payment Method");
    }
  }

  return (
    <div className="container mt-4">
      <div className="row offset-4">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body ">
              <h5 className="card-title ">Order Successful</h5>
              <h6>Order ID:{OrderID}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row offset-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body ">
              <form>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="payMentMethode"
                      onChange={() => ChangePaymentMethode("Easypaisa")}
                      id="EasyPaisa"
                    />{" "}
                    EasyPaisa
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="payMentMethode"
                      onChange={() => ChangePaymentMethode("JazzCash")}
                      id="JazzCash"
                    />{" "}
                    JazzCash
                  </label>
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="payMentMethode"
                      onChange={() => ChangePaymentMethode("Stripe")}
                      id="Stripe"
                    />{" "}
                    Stripe
                  </label>
                </div>
                <button
                  onClick={PAymentButton}
                  type="button"
                  className="btn btn-sm btn-success mt-2"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
