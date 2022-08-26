import * as yup from "yup";

const createNewPasswordSchema = yup.object().shape({
  token: yup
    .string()
    .min(4, 'Invalid token combination')
    .required("* This field is required"),
  password: yup
    .string()
    .min(8, 'Password cannot be less than 8 characters')
    .required("* This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required("* This field is required")
});

export default createNewPasswordSchema;
