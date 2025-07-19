import axios from 'axios';

const API_URL = '/api/v1/resume';

// Get resume templates
const getTemplates = async () => {
  const response = await axios.get(`${API_URL}/templates`);
  return response.data;
};

// Generate resume PDF
const generateResume = async (resumeData, templateId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      responseType: 'blob', // Important for file download
    },
  };
  const response = await axios.post(
    `${API_URL}/generate`,
    { resumeData, templateId },
    config
  );
  return response.data;
};

export default {
  getTemplates,
  generateResume,
};