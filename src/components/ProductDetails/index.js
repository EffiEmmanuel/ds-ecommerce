import React, { useEffect, useState } from "react";
import "./index.css";
import queryString from "query-string";
import axios from "axios";
import Swal from "sweetalert2";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const productId = window.location.href.split("/")[4];

  useEffect(() => {
    async function getProductById() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/getProductsById?productId=${productId}`
        )
        .then((res) => {
          setProduct(res.data.Product);
          console.log("RESPONSE:", res);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getProductById();
  }, [productId]);

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
    console.log(user);
    const userId = user._id;
    console.log(typeof userId);
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
      const user = JSON.parse(sessionStorage.getItem("user"));
      const userId = user._id;
      console.log("USERID:", userId);
      console.log("PRODUCT:", productId);
      await axios
        .post(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/addProductsToCartP?userId=${userId}&productId=${productId}`
        )
        .then((res) => {
          console.log("RESPONSE:", res);
          Swal.fire({
            title: "Success",
            text: "Product has ben added to your cart.",
            icon: "success",
            timer: 3000,
          });
          // window.location.reload()
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

  let currency = Intl.NumberFormat("en-US");

  return (
    <div className="main-content container-fluid product-details">
      <div className="product-detail d-flex">
        <div className="left">
          <img src={product?.image} alt={`${product?.name}`} />
        </div>

        <div className="right d-flex mt-5 p-5">
          <div className="checkout-card card w-100">
            <div className="card-header">
              <h6>
                {product?.name}
                <span className="ds-pink">.</span>
              </h6>
            </div>
            <div className="card-body">
              <p style={{ color: "#a4a4a4" }}>
                ₦{currency.format(product?.price)}
              </p>
              <p className="text-decoration-underline text-uppercase mt-4 semibold-text">
                Description
              </p>
              <small>{product?.description}</small>

              <div className="d-flex justify-content-between align-items-center">
                <>
                  <button
                    onClick={handleAddToCart}
                    href="/shop"
                    className="btn ds-bg-pink checkout-actions add-to-cart-action"
                  >
                    <i class="bi bi-cart-plus"></i>
                  </button>
                  <button
                    onClick={handleAddToWishlist}
                    className="btn btn-dark checkout-actions add-to-wishlist-action"
                  >
                    <i class="bi bi-heart"></i>
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
