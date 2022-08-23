import React from "react";
import "./index.css";
import Carousel from "../Carousel";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";
import ProductCard from "../ProductCard";

function Shop() {
  return (
    <div className="main-content shop">
      <Carousel />

      <div className="product-category">
        <h3 className="category-title">
          Shop Accesories<span className="ds-pink">.</span>
        </h3>

        <div className="products">
          <ProductCard 
            title='Ps5 Pad'
            description='lorem ipsum dolor'
            image={ps5Pad}
            productId={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop;
