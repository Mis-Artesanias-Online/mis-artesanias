import axios from "axios";

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// VITE_API_KEY => REQUIRED
const getAllProducts = async () => {
  let config = {
    method: "get",
    url: `${VITE_API_ENDPOINT}/products`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };

  const res = await axios(config)
    .then(function (response) {
      const { products } = response.data;
      // console.log(products);
      // setProducts(products);
      return products;
    })
    .catch(function (error) {
      console.error(error);
    });

  console.log(res);
  return res;
};

export { getAllProducts };
