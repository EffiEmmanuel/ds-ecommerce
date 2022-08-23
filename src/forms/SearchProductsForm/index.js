import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

function SearchProductsForm() {
  const navigator = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigator('/search')
  }


  return (
    <form className="form-container search-form" onSubmit={handleSubmit}>
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
