import React from 'react'
import "../components/Cart.css"

import Subtotal from "../components/Subtotal"

import {useStateValue} from "../components/StateProvider"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Cart() {
    const [{basket}] =useStateValue();
   
        
    return (
      <div>
        
        <Header />

        {basket?.length === 0 ? (
          <div className="py-5 h-50">
            <h2 className="text-dark ">Your Cart is empty</h2>
          </div>
        ) : (
          <div className="my-5 cart__Section">
            <div className="cart-heading">
              <span className="cart-header cart-item ">Item </span>
              <span className="cart-header ">Quantity</span>
              <span className="cart-header ">Unit Price</span>
              <span className="cart-header ">Sub Total</span>
            </div>
            <div className="cart_items">
              <div>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    quantity={item.quantity}
                    Subtotal={item.Subtotal}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {basket?.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}

        <Footer />
      </div>
    );
}

 

export default Cart
