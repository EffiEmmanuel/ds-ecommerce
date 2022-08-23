import { useFormik } from "formik";
import "./index.css";
import React from "react";
import handleFormSubmit from "../../helpers/handleFormSubmit";
import signupSchema from "./validation";

function UserSignupForm() {
  const onSubmit = async (values, actions) => {
    const response = handleFormSubmit(
      "/customer/login",
      values,
      "Login Successful"
    );

    console.log('Response:', response)
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
      name: ""
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
