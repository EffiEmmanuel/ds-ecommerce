import { useFormik } from "formik";
import "./index.css";
import React from "react";
// import handleFormSubmit from "../../helpers/handleFormSubmit";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import createProductSchema from "./validation";

function CreateProductForm() {

  const onSubmit = async (values, actions) => {
    const formData = new FormData()

    formData.set()
    // console.log(formData);

    await axios
      .post(`${process.env.REACT_APP_BASE_URL_ADMIN}/createProduct`, new FormData())
      .then((res) => {
        Swal.fire({
          title: "Success🎊",
          text: "Product successfully added",
          icon: "success",
          timer: 3000,
        });

        window.location.reload()
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.message,
          icon: "error",
          timer: 3000,
        });
        // window.location.reload()
      });
  };

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useFormik({
    initialValues: {
      productName: "",
      price: 0,
      description: "",
      category: "",
      image: null,
    },
    validationSchema: createProductSchema,
    onSubmit,
  });


  console.log('Values:', values)

  const categories = [
    'Groceries',
    'Electronics',
    'Phone Accessories',
    'Clothing',
    'Footwear',
    'Wristwatch'
  ]

  return (
    <form className="form-container" name="create-product" onSubmit={handleSubmit}>
      <div className="form-group mt-4">
        <label htmlFor="productName">Product name:</label>
        <input
          type="productName"
          className="form-control"
          id="productName"
          name="productName"
          value={values.productName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.productName && <p className="error">{errors.productName}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          className="form-control"
          id="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.price && <p className="error">{errors.price}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleChange}>
          <option value='#' disabled>--SELECT CATEGORY--</option>
          {categories.map(category => {
          return (
            <option value={category}>{ category }</option>
          )
        })}
        </select>
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          accept="image/*"
          className="form-control"
          id="image"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.image && <p className="error">{errors.image}</p>}
      </div>

      <button disabled={isSubmitting} className="btn btn-dark shop-btn auth">
        Add
      </button>
    </form>
  );
}

export default CreateProductForm;
