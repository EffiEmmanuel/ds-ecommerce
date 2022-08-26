import { useFormik } from "formik";
import "./index.css";
import React, { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import forgotPasswordSchema from "./validation";

function ForgotPasswordForm() {
  const navigator = useNavigate();

  const onSubmit = async (values, actions, event) => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL_CUSTOMER}/forgotPassword`, values)
      .then((res) => {
        console.log("RESPONSE:", res);
        Swal.fire({
          title: "Success",
          text: res.data.message,
          icon: "success",
          timer: 3000,
        });

        setTimeout(() => {
          navigator("/createNewPassword");
        }, 3200);

        // window
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
      email: "",
    },
    validationSchema: forgotPasswordSchema,
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
      <button disabled={isSubmitting} className="btn btn-dark shop-btn">
        Request
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
