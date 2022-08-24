import axios from "axios";
import env from "react-dotenv";
import Swal from "sweetalert2";

export const makeAPICall = {
  post: async (endpoint, values, isCutsomer) => {
    let response, data, error;

    await axios
      .post(
        `${
          isCutsomer
            ? process.env.REACT_APP_API_BASE_URL_CUSTOMER
            : process.env.REACT_APP_API_BASE_URL_ADMIN
        }/${endpoint}`,
        values
      )
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        error = err;
      });

    response = {
      data,
      error,
    };
    return response;
  },

  get: async (endpoint, isCustomer) => {
    let response, data, error;

    const url = isCustomer
      ? process.env.REACT_APP_BASE_URL_CUSTOMER
      : process.env.REACT_APP_BASE_URL_ADMIN;

    await axios
      .get(`${url}/${endpoint}`)
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        response = err
        return response
      });

    response = data;
    return response;
  },
};
