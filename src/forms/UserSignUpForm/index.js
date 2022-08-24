import { useFormik } from "formik";
import "./index.css";
import React from "react";
// import handleFormSubmit from "../../helpers/handleFormSubmit";
import signupSchema from "./validation";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function UserSignupForm() {
  const navigator = useNavigate();

  const onSubmit = async (values, actions) => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL_CUSTOMER}/register`, values)
      .then((res) => {
        Swal.fire({
          title: "Welcome onboard!🎊",
          text: "Please verify your account to proceed.",
          icon: "success",
          timer: 3000,
        });

        console.log("userId:", res);
        const userId = res.data.data._id;

        setTimeout(() => {
          navigator(`/email/verify?userId=${userId}`);
        }, 3200);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: 'This user already exists!',
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
      email: "",
      password: "",
      name: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Fullname:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group mt-4">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
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
        Sign up
      </button>
    </form>
  );
}

export default UserSignupForm;
