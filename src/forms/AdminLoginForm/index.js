import { useFormik } from "formik";
import "../UserLoginForm/index.css";
import React, { useContext } from "react";
import loginSchema from "./validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

import { AppContext } from "../../App";

function AdminLoginForm() {
  // const { setIsAdminLoggedIn, isUserLoggedIn, setIsUserLoggedIn } = useContext(AppContext)
  const navigator = useNavigate()

  const onSubmit = async (values, actions) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL_ADMIN}/loginAdmin`, values)
    .then(res => {
      Swal.fire({
        title: 'Success',
        text: res.data.message,
        icon: 'success',
        timer: 3000
      })

      // Log out any currently logged in user
      if (sessionStorage.getItem("token")) {
        sessionStorage.removeItem("token");
      }
      if (sessionStorage.getItem("user")) {
        sessionStorage.removeItem("user");
      }

      sessionStorage.setItem('admin-token', res.data.token)
      sessionStorage.setItem('admin', JSON.stringify(res.data.admin))

      navigator('/admin/dashboard')

      // window.location.reload()
    })
    .catch(err => {
      Swal.fire({
        title: 'Error',
        text: 'An error occured. Please try again',
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

export default AdminLoginForm;
