import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import "./index.css";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";
import queryString from "query-string";
import { makeAPICall } from "../../helpers/apiCall";
import Swal from "sweetalert2";
import axios from "axios";

function SearchResults() {
  // eslint-disable-next-line no-restricted-globals
  const searchQuery = queryString.parse(location.search);

  const [products, setProducts] = useState(undefined);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/search?search=${searchQuery.search}`
        )
        .then((response) => {
          // console.log("RESPONSE:", response);
          setProducts(response.data.products);
          console.log('products:', products)
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setNotFound(true);
          }
        });
    }
    getProducts();
  }, []);

  return (
    <div className="main-content search my-5">
      <div className="search-result-header d-flex justify-content-center">
        <h2 className="semibold-text">
          Search results for "
          <span className="ds-pink">{searchQuery.search}</span>
          ".
        </h2>
      </div>

      <div className="search-results">
        {notFound && (
          <h5 className="not-found mt-4">
            Sorry, this product does not exist...
          </h5>
        )}

        {!notFound && (
          <div className="products d-flex flex-wrap justify-content-center mt-5">
            {products?.map((product) => {
              return (
                <div key={product._id}>
                  <ProductCard
                    title={product.name}
                    description={product.description}
                    image={product.image}
                    productId={product._id}
                    price={product.price}
                    isUser={true}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
