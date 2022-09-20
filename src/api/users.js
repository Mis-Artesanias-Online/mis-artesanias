import axios from "axios";
const API = 'https://super-cafe.herokuapp.com/api/users';

async function getUser() {
    try {
      const response = await axios.get(API);
      console.log(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

getUser()
