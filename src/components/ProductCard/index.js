import React from "react";
import { Fade } from "react-reveal";

function ProductCard({ title, description, image, productId }) {
  return (
    <Fade duration={1500}>
      <div className="product-card card py-3" style={{ width: "18rem" }}>
        <img className="card-img-top p-4" src={image} alt="" />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="/shop" className="btn ds-bg-pink">
              Add to cart
            </a>
            <a href="/shop" className="btn btn-dark">
              Add to Wishlist
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProductCard;
