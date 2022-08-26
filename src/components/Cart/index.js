import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import './index.css'
import Swal from "sweetalert2";
import ProductCard from "../ProductCard";
import { usePaystackPayment } from "react-paystack";


const currency = Intl.NumberFormat('en-US')

function Cart() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartId, setCartId] = useState(null);

  // Get all products
  useEffect(() => {
    async function getAllProducts() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const userId = user._id;
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/getProductsFromCart?userId=${userId}`
        )
        .then((res) => {
          // console.log("RESPONSE:", res.data.Data._id);
          // const cartId = res.data.Data._id;
          // console.log("RESPONSE:", res);
          const products = res.data.Data.products ? res.data.Data.products : [];
          setAllProducts(products);
          setCartId(res.data.Data._id);
          // console.log(allProducts)
        })
        .catch((err) => {
          setAllProducts([]);
        });
    }
    getAllProducts();
  }, []);

  const makeOrder = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;

    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/checkout1?userId=${userId}&cartId=${cartId}`
      )
      .then(async (res) => {
        console.log("CHECKOUT RESPONSE:", res);
        const paymentLink = res.data.Data.checkout.data.authorization_url;        
        let win = window.open(paymentLink);   
        win.addEventListener('close', window.location.reload())     
      })
      .catch((err) => {
        console.log("CHECKOUT ERROR:", err);
      });
  };

  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Cart<span className="ds-pink">.</span>
          </h1>
          {/* <small>Log in to your account</small> */}
        </div>

        <div className="login-container-body mt-4 cart">
          {allProducts?.map((product) => {
            return (
              <div
                key={product._id}
                className=""
                style={{
                  margin: "10px",
                  height: "280px !important",
                }}
              >
                <ProductCard
                  title={product.name}
                  description={product.description}
                  image={product.image}
                  productId={product.productId}
                  price={product.amount}
                  quantity={product.quantity}
                  cartId={cartId}
                  isCart={true}
                />
              </div>
            );
          })}

          {allProducts?.length === 0 && (
            <h6>You do not have any products in your cart.</h6>
          )}

          {!allProducts?.length < 1 && (
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={makeOrder} className="btn btn-dark shop-btn">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
