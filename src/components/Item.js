import React from "react";
import { Link } from "react-router-dom";
import {Col } from "react-bootstrap";
import Star from "@material-ui/icons/Star";
import Love from "@material-ui/icons/FavoriteBorder";
import { useStateValue } from "./StateProvider";

import "./item.css";

const Item = ({
  id,
  image,
  name,
  description,
  price,
  brand,
  shipping,
  rating,
  type,
  quantity
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        name: name,
        description: description,
        price: price,
        brand: brand,
        shipping: shipping,
        rating: rating,
        type: type,
        quantity:quantity
      },
    });
  };

  return (
    <Col key={id} xl={3} lg={4} md={6} sm={6} xs={6} className="product">
      <div className="p-2">
        <Link to={{pathname: `/about/${id}`}} >

          <div>
                <img className="product__img" src={image} alt="" />
          </div>
          </Link>
        <div className="product__info">
                 <h4>{name}</h4>
                 <p>{description}</p>
                 <p className="product__price">
                 <small>$</small>
                 <strong>{price}</strong>
                  </p>
                  <p>{shipping}</p>
        </div>


            <div className="d-flex justify-content-between">
                
        <div className="d-flex align-items-center">
                 <p className="product__rating">
                 {" "}
            {Array(rating)
              .fill()
              .map((_) => (
                <Star className="about__starIcon" style={{ fill: "orange" }} />
              ))}
            <span>{rating}</span>{" "}
          </p>
        </div>

          <button onClick={addToBasket} className="product__button">
            <Love />
            Watch{" "}
          </button>
            </div>
      </div>
    </Col>
  );
};

export default Item;
