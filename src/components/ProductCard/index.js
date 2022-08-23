import React from "react";
import "./index.css";
import { Fade } from "react-reveal";

function ProductCard({ title, description, image, productId }) {
  return (
    <Fade duration={1500}>
      <div
        className="product-card card py-3 mx-2 my-2"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top p-4 w-100" src={image} alt="" />

        <div className="card-body">
          <h5 className="card-title product-title">{title}</h5>
          <p className="card-text product-description">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a href="/shop" className="btn ds-bg-pink">
              <i class="bi bi-cart-plus"></i>
            </a>
            <a href="/shop" className="btn btn-dark">
              <i class="bi bi-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProductCard;
