import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../ProductCard";

function ViewProducts() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL_ADMIN}/getProduct`)
        .then((res) => {
          console.log("RESPONSE:", res);
          setProducts(res.data.products)
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getProducts();
  });

  return (
    <div className="main-content view-products">
      <div className=" mt-5">
        <div className="login-container-header container-fluid">
          <h1>
            View Products<span className="ds-pink">.</span>
          </h1>
          <small>Your inventory</small>
        </div>

        <div className="login-container-body mt-4">
          <div className="products d-flex flex-wrap justify-content-center mt-5">
            {products?.map((product) => {
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
    </div>
  );
}

export default ViewProducts;
