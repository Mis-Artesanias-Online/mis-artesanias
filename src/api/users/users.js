import axios from "axios";

import { saveItem, getItem } from "../../lib/sessionStorage";

const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// VITE_API_KEY => REQUIRED
export const getUsersPaginated = async (from = null, limit = null) => {
  var config = {
    method: "get",
    url: `${VITE_API_ENDPOINT}/users?from=${from}&limit=${limit}`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// VITE_API_KEY => REQUIRED
export const createUser = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
    role: "USER_ROLE",
  };

  var config = {
    method: "post",
    url: `${VITE_API_ENDPOINT}/users`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
    data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// VITE_API_KEY => REQUIRED
export const updatedUser = async (userID, name, email, password) => {
  const data = {
    name,
    email,
    password,
    role: "USER_ROLE",
  };
  var config = {
    method: "put",
    url: `${VITE_API_ENDPOINT}/users/${userID}`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
      "x-jwt": getItem("x-jwt"),
    },
    data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// VITE_ADMIN_KEY AND JWT => REQUIRED
export const deleteUser = async (userID) => {
  var config = {
    method: "put",
    url: `${VITE_API_ENDPOINT}/users/${userID}`,
    headers: {
      "x-api-key": import.meta.env.VITE_ADMIN_KEY,
      "x-jwt": getItem("x-jwt"),
    },
    data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// VITE_API_KEY => REQUIRED
export const loginUser = (email, password) => {
  const data = {
    email,
    password,
  };

  var config = {
    method: "post",
    url: `${VITE_API_ENDPOINT}/auth/login`,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      saveItem("x-jwt", response.data.token);
      return "OK"; // Thats means: User logged in and token saved on sessionstorage
    })
    .catch(function (error) {
      console.log(error);
    });
};
