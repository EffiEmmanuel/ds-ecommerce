import { useFormik } from "formik";
import "./index.css";
import React, { useContext } from "react";
import loginSchema from "./validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CreateNewPasswordForm() {
  const navigator = useNavigate();

  const onSubmit = async (values, actions, event) => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL_CUSTOMER}/resetPassword`, values)
      .then((res) => {
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          timer: 3000,
        });

        navigator("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: err.response.data.message,
          icon: "error",
          timer: 3000,
        });
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
      token: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="token">Token:</label>
        <input
          type="text"
          className="form-control"
          id="token"
          value={values.token}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.token && <p className="error">{errors.token}</p>}
      </div>

      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button disabled={isSubmitting} className="btn btn-dark shop-btn">
        Change
      </button>
    </form>
  );
}

export default CreateNewPasswordForm;
