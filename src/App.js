import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Product from "./Product";
import Form from "./components/Form";
import Cart from "./components/Cart";
import "./App.css";
import Item from "./components/Item";
import Search from "./components/Search"

function App() {

  // function

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* CHECKOUT CART */}
          <Route path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
          {/* SIGN UP */}
          <Route path="/login">
            <Header />
            <Form title="LOGIN" topBtn="LOGIN" downBtn="LOGIN WITH FACEBOOK" />
          </Route>

          {/*LOG IN */}
          <Route path="/signup">
            <Header />
            <Form
              title="REGISTER"
              topBtn="CREATE ACCOUNT"
              downBtn="REGISTER WITH FACEBOOK"
            />
          </Route>
          {/* SEARCH ITEM */}
          <Route path="/search/:value">
            <Search/>
            
          </Route>
          {/* ABOUT */}
          <Route path="/about/:id">
            <Header />
            <About />
          </Route>

          {/* HOME PAGE */}
          <Route path="/">
            <div>
              <Header />

              <Home />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

{
  /* {Product.map(product=> 
product.type==="beauty"&&
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
         />
  
  )} */
}
