import * as yup from "yup";

const createProductSchema = yup.object().shape({
  productName: yup
    .string()
    .required("* This field is required"),
  description: yup
    .string()
    .required("* This field is required"),
  price: yup
    .number()
    .min(0, 'Price cannot be less than ₦0')
    .required("* This field is required"),
  category: yup
    .string()
    .required("* This field is required"),
  image: yup
    .mixed()
    .required("* This field is required"),
});

export default createProductSchema;
