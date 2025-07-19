import axios from 'axios';

const API_URL = '/api/v1/auth';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const forgotPassword = async (email) => {
  const response = await axios.post(`${API_URL}/forgotpassword`, { email });
  return response.data;
};

const resetPassword = async (token, password) => {
  const response = await axios.put(`${API_URL}/resetpassword/${token}`, { password });
  return response.data;
};

const getMe = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/me`, config);
  return response.data;
};

export default {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getMe,
};