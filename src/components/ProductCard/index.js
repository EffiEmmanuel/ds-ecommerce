import React, { useState } from "react";
import "./index.css";
import { Fade } from "react-reveal";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { number } from "yup";
import styled from "styled-components";
import EditProduct from "../Admin/EditProduct";

function ProductCard({
  title,
  category,
  description,
  image,
  productId,
  price,
  cartId,
  isAdmin,
  isUser,
  isCart,
}) {
  const [editProductDisplay, setEditProductDisplay] = useState("none");
  const [overlay, setOverlay] = useState("none");

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

  const handleDeleteProduct = async () => {
    await axios
      .delete(
        `${process.env.REACT_APP_BASE_URL_ADMIN}/deleteProduct?productId=${productId}`
      )
      .then((res) => {
        console.log("RESPONSE:", res);
        Swal.fire({
          title: "Success",
          text: "Product has been seccessfully deleted.",
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

  const handleEditProduct = async () => {
    setEditProductDisplay("block");
    setOverlay("block");
  };

  const handleDeleteFromCart = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;
    console.log("USERID:", userId);
    console.log("PRODUCTID:", productId);
    await axios
      .delete(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/removeProductsFromCart?userId=${userId}&productId=${productId}`
      )
      .then((res) => {
        console.log("RESPONSE:", res);
        Swal.fire({
          title: "Success",
          text: "Product has ben removed from your cart.",
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

  const checkoutCart = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/makeOrder?userId=${userId}&cartId=${cartId}`
      )
      .then((res) => {
        console.log("RESPONSE:", res);
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          timer: 3000,
        });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        Swal.fire({
          title: "Attention",
          text: err.response.data.message,
          icon: "info",
          timer: 3000,
        });
      });
  };

  return (
    <Fade duration={1500}>
      <div
        className="product-card card mx-2 mb-5"
        style={{ width: "18rem", height: "250px", position: "relative" }}
      >
        <img className="card-img-top product-image" src={image} alt="" />

        <div className="card-body">
          <h5 className="card-title product-title">{title}</h5>
          <p className="semibold-text">₦{price}</p>
          <p className="card-text product-description">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            {isUser && (
              <>
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
              </>
            )}
            {isAdmin && (
              <>
                <button
                  onClick={handleDeleteProduct}
                  href="/shop"
                  className="btn ds-bg-pink"
                >
                  <i class="bi bi-trash3"></i>
                </button>
                <button onClick={handleEditProduct} className="btn btn-dark">
                  <i class="bi bi-pencil"></i>
                </button>
              </>
            )}

            {isAdmin && (
              <EditProduct
                editProductDisplay={editProductDisplay}
                productId={productId}
                overlay={overlay}
                setOverlay={setOverlay}
                setEditProductDisplay={setEditProductDisplay}
              />
            )}

            {isCart && (
              <>
                <button onClick={handleDeleteFromCart} className="btn btn-dark">
                  <i class="bi bi-trash"></i>
                </button>

                <button onClick={checkoutCart} className="btn btn-dark">
                  Place order
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
// const EditProduct = styled.div``;

export default ProductCard;
