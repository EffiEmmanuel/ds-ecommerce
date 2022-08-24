import React from "react";
import "./index.css";
import { Fade } from "react-reveal";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { number } from "yup";

function ProductCard({ title, description, image, productId, price }) {
  const navigator = useNavigate();

  const handleAddToWishlist = async () => {
    if (!sessionStorage.getItem("token")) {
      Swal.fire({
        title: "Hey!",
        text: "You must be logged in to add products to wishlist.",
        icon: "info",
        timer: 3000,
      });
      navigator("/login");
    }

    const user = JSON.parse(sessionStorage.getItem("token"));
    console.log(user)
    const userId = user._id;
    console.log(typeof userId)
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/addProductsToWishlist?userId=${userId}&productId=${productId}`
      )
      .then((res) => {
        console.log("RESPONSE:", res);
        Swal.fire({
          title: "Success",
          text: "Product has ben added to your wishlist.",
          icon: "success",
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Internal server error",
          text: "We were unable to process your request at the moment. Please try again",
          icon: "error",
          timer: 3000,
        });
      });
  };

  const handleAddToCart = async () => {
    if (!sessionStorage.getItem("token")) {
      Swal.fire({
        title: "Hey!",
        text: "You must be logged in to add products to cart.",
        icon: "info",
        timer: 3000,
      });
      navigator("/login");
    } else {
      const user = JSON.parse(sessionStorage.getItem("token"));
      const userId = user._id;
      await axios
        .post(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/addProductsToCart?userId=${userId}&productId=${productId}`
        )
        .then((res) => {
          console.log("RESPONSE:", res);
          Swal.fire({
            title: "Success",
            text: "Product has ben added to your cart.",
            icon: "success",
            timer: 3000,
          });
        })
        .catch((err) => {
          console.log("ERROR:", err);
          Swal.fire({
            title: "Internal server error",
            text: "We were unable to process your request at the moment. Please try again",
            icon: "error",
            timer: 3000,
          });
        });
    }
  };

  return (
    <Fade duration={1500}>
      <div
        className="product-card card mx-2 mb-5"
        style={{ width: "18rem", height: "250px" }}
      >
        <img className="card-img-top product-image" src={image} alt="" />

        <div className="card-body">
          <h5 className="card-title product-title">{title}</h5>
          <p className="semibold-text">₦{price}</p>
          <p className="card-text product-description">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              onClick={handleAddToCart}
              href="/shop"
              className="btn ds-bg-pink"
            >
              <i class="bi bi-cart-plus"></i>
            </button>
            <button onClick={handleAddToWishlist} className="btn btn-dark">
              <i class="bi bi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProductCard;
