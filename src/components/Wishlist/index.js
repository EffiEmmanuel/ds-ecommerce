import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Swal from "sweetalert2";
import ProductCard from "../ProductCard";
import './index.css'

function Wishlist() {
  const [allProducts, setAllProducts] = useState([]);
  const [cartId, setCartId] = useState(null);

  // Get all products
  useEffect(() => {
    async function getAllProducts() {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const userId = user._id;
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/getProductsFromWishlist?userId=${userId}`
        )
        .then((res) => {
          const products = res.data.Data[0].products;
          console.log('RESPONSE:', res.data.Data[0].products)
          setAllProducts(products);
          console.log('PRODUCTS:', products)
          // setCartId(res.data.Data._id);
        })
        .catch((err) => {
          setAllProducts([]);
        });
    }
    getAllProducts();
  }, []);

  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Wishlist<span className="ds-pink">.</span>
          </h1>
          {/* <small>Log in to your account</small> */}
        </div>

        <div className="login-container-body mt-4 wishlist">
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
                  isWishlist={true}
                />
              </div>
            );
          })}

          {allProducts?.length === 0 && (
            <h6>You do not have any products in your wishlist.</h6>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
