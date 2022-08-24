import React, { useEffect, useState } from "react";
import "./index.css";
import Carousel from "../Carousel";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";
import ProductCard from "../ProductCard";
import axios from "axios";

function Shop() {
  const [allProducts, setAllProducts] = useState(undefined);

  // Get all products
  useEffect(() => {
    async function getAllProducts() {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL_ADMIN}/getProduct`)
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
    <div className="main-content shop">
      <Carousel />

      <div className="product-category px-5 py-5">
        <h3 className="category-title">
          Shop with us<span className="ds-pink">.</span>
        </h3>

        <div className="products d-flex flex-wrap justify-content-center mt-5">
          {allProducts?.map((product) => {
            return (
              <div key={product._id} className='shop-product'>
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

      <div className="product-category2 px-5 py-5">
        <h3 className="category-title">
          Shop Electronics<span className="ds-pink">.</span>
        </h3>

        <div className="products d-flex flex-wrap justify-content-center mt-5">
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
        </div>
      </div>

      <div className="product-category px-5 py-5">
        <h3 className="category-title">
          Shop Clothing<span className="ds-pink">.</span>
        </h3>

        <div className="products d-flex flex-wrap justify-content-center mt-5">
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
        </div>
      </div>

      <div className="product-category px-5 py-5">
        <h3 className="category-title">
          Shop Wristwatches<span className="ds-pink">.</span>
        </h3>

        <div className="products d-flex flex-wrap justify-content-center mt-5">
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
          <ProductCard
            title="Ps5 Pad"
            description="lorem ipsum dolor"
            image={ps5Pad}
            productId={1}
          />
        </div>
      </div>

      <div className="container-fluid">
        <footer className="footer">
          <p>Copyright &copy;2022. JavaScript Group 4</p>
        </footer>
      </div>
    </div>
  );
}

export default Shop;
