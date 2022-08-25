import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function Cart() {
  const [allProducts, setAllProducts] = useState();
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
          console.log("RESPONSE:", res.data.Data._id);
          const cartId = res.data.Data._id;
          console.log("RESPONSE:", res.data.Data.products);
          setAllProducts(res.data.Data.products);
          setCartId(res.data.Data._id);
          // console.log(allProducts)
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getAllProducts();
  }, []);

  const makeOrder = async () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;
    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL_CUSTOMER}/checkout?userId=${userId}&cartId=${cartId}`
      )
      .then((res) => {
        console.log("CHECKOUT RESPONSE:", res);
        const paymentLink = res.data.Data.checkout.data.authorization_url
        console.log('PAYMENT LINK:', paymentLink)
        window.location.href = paymentLink
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

        <div className="login-container-body mt-4">
          {allProducts?.map((product) => {
            console.log("PRODUCT:", product);
            return (
              <div
                key={product._id}
                className="shop-product"
                style={{
                  margin: "10px",
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

          {/* {!allProducts?.length === 0 && ( */}
            <button onClick={makeOrder} className="btn btn-dark shop-btn">
              Checkout
            </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
