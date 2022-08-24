import React from "react";
import CreateProductForm from "../../../forms/CreateProductForm";
import "./index.css";

function CreateProduct() {
  return (
    <div className="main-content login d-flex justify-content-center">
      <div className="login-container-details mt-5">
        <div className="login-container-header">
          <h1>
            Create new product<span className="ds-pink">.</span>
          </h1>
          <small>Add new inventory</small>
        </div>

        <div className="login-container-body mt-4">
          <CreateProductForm />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
