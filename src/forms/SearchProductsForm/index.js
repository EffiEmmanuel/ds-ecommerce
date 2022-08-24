import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { makeAPICall } from "../../helpers/apiCall";
import './index.css'

function SearchProductsForm() {
  const navigator = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigator(`/search?search=${search}`)
    window.location.reload()
  }

  return (
    <form className="form-container search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="searchbar"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products"
        />
      </div>
    </form>
  );
}

export default SearchProductsForm;
