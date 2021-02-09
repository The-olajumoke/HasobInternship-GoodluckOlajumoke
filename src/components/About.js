import React from 'react'
import {Button, Row, Col} from 'react-bootstrap';
import Star from "@material-ui/icons/Star"
import StarHalf from "@material-ui/icons/StarHalf"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import DownArr from "@material-ui/icons/ArrowDownward"
import  "./About.css"
import {useParams} from "react-router-dom"
import Products from "./../Product"


function About() {
    const {id} = useParams()

    

let Product = Products.find(product => id == product.id ) ;

    return (
        <div className="about">
            <Row className="about__row ">
                <Col lg={4} md={6} sm={6} className="about__imgCont">
                <img className="about__img" src={Product.image} alt=""/>
                </Col>

                <Col lg={8} md={6}  className="about__info">
                <h1 className="about__name pb-2">{Product.name}</h1>
                <h5 className="about__description py-2">{Product.description}</h5>
                <h4 className="about__brand py-2">Brand: {Product.brand}</h4>
                <div className="d-flex">
                <Star className="about__starIcon" style={{fill:"orange"}}/>
                <Star className="about__starIcon" style={{fill:"orange"}}/>
                <Star className="about__starIcon" style={{fill:"orange"}}/>
                <StarHalf className="about__starIcon" style={{fill:"orange"}} />
                <p className="mx-2">({Product.rating}) </p>
                </div>
                <div className="my-3">
                    Size:
                    <span className="about__size" >S</span>
                    <span className="about__size">M</span>
                    <span className="about__size">L</span>
                    <span className="about__size">XL</span>
                </div>
                <h1 className="about__price font-weight-bold"> $ {Product.price}</h1>
                <Button className="btn px-5 my-3">
                    <ShoppingCartIcon  className="about__cart"/>
                      ADD TO CART
                </Button>

                </Col>

<div className="item__description border">
                <h1>Description</h1>
                <div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum excepturi nesciunt ratione quisquam, molestias quod amet rem consectetur non nobis cum quis natus! Ut sed nesciunt rem perferendis nobis quasi,  </p>
                     <p>iste dolorem praesentium iure, iusto suscipit fugit corporis, ad obcaecati id quae quisquam ipsa porro quibusdam modi. Dolor perspiciatis obcaecati quod eum est delectus doloremque vero nam dolorem, officia harum,</p>
                     <p>assumenda iure fuga debitis nisi illo incidunt facilis quas ipsam reiciendis explicabo dicta aliquid veritatis? Autem repudiandae fugit cumque nulla aut assumenda nam, voluptatem iusto esse harum atque sed voluptatum quod reiciendis consequuntur sequi deserunt. </p>
                    <button className="seeMore__btn" >View More
                    <DownArr/>
                    </button>
                </div>

</div>


            </Row>
        </div>
    )
}

export default About
