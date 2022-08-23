import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required("* This field is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("* This field is required"),
  password: yup
    .string()
    .min(8, "Password must NOT be less than 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .required("* This field is required"),
});

export default signupSchema;
