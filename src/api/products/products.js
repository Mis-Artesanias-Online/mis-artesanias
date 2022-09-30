import axios from "axios";

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// VITE_API_KEY => REQUIRED
export const getAllProducts = async () => {
  let config = {
    method: "get",
    url: `${VITE_API_ENDPOINT}/products`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };

  axios(config)
    .then(function (response) {
      return console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
