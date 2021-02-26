import React from 'react'
import { Row, Col} from 'react-bootstrap';
import SideNav from "../components/SideNav"
import Products from "../Product"
import Item from "../components/Item"
import "../components/Home.css"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import Apps from "@material-ui/icons/Apps"
import View from"@material-ui/icons/ViewModule"
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
      <>
      <Header/>
        <div className="homepage">
          <SideNav />

          {/* MAIN */}
          <div className="border px-2  ">
            {/* BUTTONS  */}

            <Row className="my-2 home__helpCont ">
              <Col
                lg={6}
                md={12}
                className="d-flex justify-content-between homepage__dropCont "
              >
                <button className="homepage__dropDown">
                  Wellness <ArrowDropDown />
                </button>
                <button className="homepage__dropDown">
                  Free Shipping <ArrowDropDown />
                </button>
                <button className="homepage__dropDown">
                  Delivery Options
                  <ArrowDropDown />{" "}
                </button>
              </Col>

              <Col lg={6} md={12} className="d-flex justify-content-end ">
                <div className=" d-flex justify-content-between ">
                  <div>
                    <button className="home__button">Show all</button>
                    <button className="home__button">Saved</button>
                    <button className="home__button">Buy Now</button>
                  </div>

                  <div className="ml-3">
                    <button className="home__button">
                      <Apps />
                    </button>
                    <button className="home__button">
                      <View />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="related__Cont">
              <h5 className="text-bold">Related </h5>
              <span>Worldwide Shipping</span>
              <span>Worldwide </span>
              <span>Worldwide</span>
              <span>Worldwide</span>
            </div>

            {/* Product */}
            <Row className="w-100 m-auto">
              {Products.map((product) => {
                return (
                  <Item
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    brand={product.brand}
                    shipping={product.shipping}
                    rating={product.rating}
                    type={product.type}
                    quantity={product.quantity}
                  />
                );
              })}
            </Row>
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default Home
