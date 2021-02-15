import React from 'react'
import "./Cart.css"
import Love from "@material-ui/icons/FavoriteBorder"
import Bin from "@material-ui/icons/Delete"
import jugs from "./../productPics/jugs.JPG"
import Cat from "./../productPics/cat.JPG"
import Subtotal from "./Subtotal"

import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Cart() {
    const [{basket}] =useStateValue();
   
        
    return (
        <div>
            {basket?.length ===0?(
                <div className="py-5 h-50">
                    <h2 className="text-dark ">Your Cart is empty</h2>
                </div>
            ):
         <div className="my-5 cart__Section">
                <div className="cart-heading">
                    <span className="cart-header cart-item ">Item </span>
                    <span className="cart-header ">Quantity</span>
                    <span className="cart-header ">Unit Price</span>
                    <span className="cart-header ">Sub Total</span>
                </div>
                <div className="cart_items">               
         <div>
          {basket.map(item=>(
                <CheckoutProduct
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                quantity= {item.quantity}
                Subtotal={item.Subtotal}
                />
            ))}

        </div>

            
                   
               </div>


            </div> 
} 

        {basket?.length >0 &&(
            <div className="checkout__right">
                <Subtotal/>
            </div>
        )}
        </div>
    )
}

 

export default Cart
