import React from 'react'
import Header from './Header'
import Product from "./../Product"
import {  Row, Col } from "react-bootstrap";
import Item from "./Item";
import Footer from "./Footer";
import {useParams} from "react-router-dom"


function Search() {
  const { value } = useParams();
console.log(value)
  let filteredArr;
               filteredArr=Product.filter(item =>item.name.toLowerCase().includes (value.toLowerCase()))
             console.log(filteredArr)
    return (
      <div>
        <Header />

        <Row className="">
          
          {
 filteredArr.length< 1 ?<h2 className=" my-3 mx-auto text-dark">{value} not found</h2>:
 
                filteredArr.map(product =>
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
            />)

          }

        </Row>
        <Footer />
      </div>
    );
}

export default Search
