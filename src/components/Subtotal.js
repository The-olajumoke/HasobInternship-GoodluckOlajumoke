import React from "react";
import { useStateValue } from "./StateProvider";
import {Link} from "react-router-dom"
function Subtotal() {
  const [{ basket },] = useStateValue();
  const subTotals = basket.map((item) => +item.price * +item.quantity);
  const total = subTotals.reduce((a, b) => a + b, 0);
  return (
    <div>
      <div class="cart-total">
        <span class="cart-total-title">Total:</span>
        <span class="cart-total-price"> ${total}</span>
      </div>

      <div className="btn-cont d-flex my-3 justify-content-end">
        <button class="btn bg-light btn-purchase border" type="button">
          <Link to="/">Continue Shopping</Link>
        </button>

        <button class="btn btn-primary btn-purchase" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
