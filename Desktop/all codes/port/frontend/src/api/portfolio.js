
import axios from 'axios';

const API_URL = '/api/v1/portfolio';

// Get portfolio data
const getPortfolio = async (userId) => {
  const response = await axios.get(`${API_URL}/${userId}`);
  return response.data;
};

// Education
const addEducation = async (educationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}/education`, educationData, config);
  return response.data;
};

const updateEducation = async (id, educationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/education/${id}`, educationData, config);
  return response.data;
};

const deleteEducation = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/education/${id}`, config);
  return response.data;
};

// Experience (similar structure)
// Projects (similar structure)
// Skills (similar structure)

export default {
  getPortfolio,
  addEducation,
  updateEducation,
  deleteEducation,
  // Export other portfolio related functions
};