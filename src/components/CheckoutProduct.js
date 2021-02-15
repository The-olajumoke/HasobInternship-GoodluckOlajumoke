import React,{useState} from 'react'
import "./Cart.css"
import Love from "@material-ui/icons/FavoriteBorder"
import Bin from "@material-ui/icons/Delete"
import {useStateValue} from "./StateProvider"
import {Link} from "react-router-dom"
import { setQuantity } from './reducer'


function CheckoutProduct({id, name, description,image,price,quantity}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket=() =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
        
    } 
    // const [value,setValue]=useState(1)

    const handleChange = (e) => {
        dispatch({
            type: "SET_QUANTITY",
            payload: {id: id, quantity: +e.target.value}
        })
    }
    // const handleChange=(e) =>{
    //     setValue(+e.target.value)
    // }

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
                    <input type="number" className="cart-header cart-column others" value={quantity} onChange={handleChange}min="1" max="5" />
                    <span className="cart-header cart-column others">{price}</span>
                    
                    <span className="cart-header cart-column others">{+price*+quantity}</span>
                </div>
        </div>
    )
}

export default CheckoutProduct
