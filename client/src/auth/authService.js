import axios from "axios";

const API_URL = "/api/users/";

const register = async (userData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await axios.post(API_URL, userData, config);

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await axios.post(API_URL + "login", userData, config);

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("userInfo");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
