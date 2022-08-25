import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function Cart() {
  const [allProducts, setAllProducts] = useState(undefined);

  // Get all products
  useEffect(() => {
    async function getAllProducts() {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL_CUSTOMER}/getProduct`)
        .then((res) => {
          setAllProducts(res.data.products);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getAllProducts();
  });

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
            return (
              <div key={product._id} className="shop-product">
                <ProductCard
                  title={product.name}
                  description={product.description}
                  image={product.image}
                  productId={product._id}
                  price={product.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
