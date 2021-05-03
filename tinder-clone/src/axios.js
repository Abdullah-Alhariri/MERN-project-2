import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-exprt.herokuapp.com",
});

export default instance;
