import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function EditProduct({
  editProductDisplay,
  productId,
  overlay,
  setOverlay,
  setEditProductDisplay,
}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("USE EFFECT");
    async function getProductById() {
      await axios
        .get(
          `${process.env.REACT_APP_BASE_URL_CUSTOMER}/getProductById?productId=${productId}`
        )
        .then((res) => {
          console.log("RESPONSE:", res);
          setProduct(res.data.product);
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    }
    getProductById();
  }, []);

  const handleEditProductSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e);
    console.log("FORM DATA:", formData);

    // await axios
    //   .delete(
    //     `${process.env.REACT_APP_BASE_URL_ADMIN}/deleteProduct?productId=${productId}`
    //   )
    //   .then((res) => {
    //     console.log("RESPONSE:", res);
    //   })
    //   .catch((err) => {
    //     console.log("ERROR:", err);
    //   });
  };

  const categories = [
    "Groceries",
    "Electronics",
    "Phone Accessories",
    "Clothing",
    "Footwear",
    "Wristwatch",
  ];

  return (
    <EditProductModal
      productId={productId}
      className="edit-product"
      style={{
        display: `${editProductDisplay}`,
      }}
    >
      <div
        className="overlay"
        style={{
          display: `${overlay}`,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={(e) => {
          setOverlay("none");
          setEditProductDisplay("none");
        }}
      ></div>
      <h2 className="text-white">Sorry, This feature is In production</h2>
      {/* <form
        className="form-container"
        onSubmit={handleEditProductSubmit}
        style={{
          position: "abdolute",
          top: "0",
          left: "0",
          zIndex: "7",
        }}
      >
        <div className="form-group">
          <label htmlFor="productName">Product name:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={product?.name}
            disabled
            onChange={(e) => {
              e.target.disabled = false;
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={product?.description}
            disabled
            onChange={(e) => {
              e.target.disabled = false;
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={product?.price}
            disabled
            onChange={(e) => {
              e.target.disabled = false;
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productName">Category:</label>
          <select
            className="form-control"
            name="category"
            value={product?.category}
          >
            <option className="form-control" value="">
              --SELECT CATEGORY--
            </option>
            {categories.map((category) => {
              return (
                <option className="form-control" value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="productName">Image:</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            value={product?.image}
            disabled
            onChange={(e) => {
              e.target.disabled = false;
            }}
          />
        </div>

        <button type="submit" className="btn btn-dark ds-bg-pink">
          Save
        </button>
      </form> */}
    </EditProductModal>
  );
}

const EditProductModal = styled.div`
  position: absolute;
  top: 0;
  left: 0
`;

export default EditProduct;
