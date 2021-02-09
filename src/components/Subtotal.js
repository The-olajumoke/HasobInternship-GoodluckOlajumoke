import React from 'react'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer"
function Subtotal() {
    const [{basket}, dispatch] =useStateValue();
    return (
        <div>
            
            <div class="cart-total">
                <span class="cart-total-title">Total:</span>
                  <CurrencyFormat className="cart-total-price"
                renderText={(value) =>(
                  <span class="cart-total-price">{`${value}`}</span>
                )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"true"}
                  thousandSeperator={true}
                  prefix ={"$"}
                  />
                  {/* <span class="cart-total-price">$142.94</span> */}
              </div>
  
  <div className="btn-cont d-flex my-3 justify-content-end">
      
        <button class="btn bg-light btn-purchase border" type="button">Continue Shopping</button>
        <button class="btn btn-primary btn-purchase" type="button">Checkout</button>
  </div>        
    </div>
    )
}

export default Subtotal
