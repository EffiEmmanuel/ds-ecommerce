import React from "react";
import ProductCard from "../ProductCard";
import "./index.css";
import ps5Pad from "../../assets/images/ps5-pad-trimmy.png";

function SearchResults() {
  return (
    <div className="main-content search my-5">
      <div className="search-result-header d-flex justify-content-center">
        <h2 className="semibold-text">
          Search results for "<span className="ds-pink">iPhone 14 Pro Max</span>
          ".
        </h2>
      </div>

      <div className="search-results">
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
    </div>
  );
}

export default SearchResults;
