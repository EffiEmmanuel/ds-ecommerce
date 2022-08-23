import React from "react";
import './index.css'

function SearchProductsForm() {
  return (
    <form className="form-container">
      <div className="form-group">
        <input
          type="text"
          className="searchbar"
          name="search"
          placeholder="Search products"
        />
      </div>
    </form>
  );
}

export default SearchProductsForm;
