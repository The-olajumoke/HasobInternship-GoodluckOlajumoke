import React from 'react'
import "./Cart.css"
import Love from "@material-ui/icons/FavoriteBorder"
import Bin from "@material-ui/icons/Delete"
import {useStateValue} from "./StateProvider"

function CheckoutProduct({id, name, description,image,price
}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=() =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
        
    } 
    return (
        <div>
                 <div className="cart-row">
                    <div className="cart-header cart-item cart-column ">
                    <img className="cart-item-image" src={image} alt=""/>
                    <div className="cart-item-title">
                                     <h4> <strong>{name}</strong></h4>
                                     <p>{description}</p>
                                     <div className="cart__btnCont my-2 justify-content-between w-100 ">
                                     <div className="cart__button"><Love className="cart__icon"/>Save Item </div>
                                     <div className="cart__button" onClick={removeFromBasket}><Bin className="cart__icon"/>Remove </div>
                                     </div>
                            </div>
                    </div>
                    <span className="cart-header cart-column others">1</span>
                    <span className="cart-header cart-column others">{price}</span>
                    <span className="cart-header cart-column others">{price }</span>
                </div>
        </div>
    )
}

export default CheckoutProduct
