import { useFormik } from "formik";
import "./index.css";
import React from "react";
import handleFormSubmit from "../../helpers/handleFormSubmit";
import loginSchema from "./validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'
import jwtDecode from "jwt-decode";

function UserLoginForm() {
  const navigator = useNavigate()

  const onSubmit = async (values, actions) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL_CUSTOMER}/login`, values)
    .then(res => {
      Swal.fire({
        title: 'Success',
        text: res.data.message,
        icon: 'success',
        timer: 3000
      })

      const token = jwtDecode(res.data.token)
      console.log('DECODED USER:', token)
      sessionStorage.setItem('token', JSON.stringify(token))
      navigator('/shop')
      window.location.reload()
    })
    .catch(err => {
      Swal.fire({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        timer: 3000
      })
    })
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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button disabled={isSubmitting} className="btn btn-dark shop-btn auth">
        Log in
      </button>
    </form>
  );
}

export default UserLoginForm;
