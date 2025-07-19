import axios from 'axios';

const API_URL = '/api/v1/blog';

// Get all blog posts
const getBlogPosts = async (params = {}) => {
  const response = await axios.get(API_URL, { params });
  return response.data;
};

// Get single blog post
const getBlogPost = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create blog post
const createBlogPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, postData, config);
  return response.data;
};

// Update blog post
const updateBlogPost = async (id, postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/${id}`, postData, config);
  return response.data;
};

// Delete blog post
const deleteBlogPost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

// Add comment to blog post
const addComment = async (postId, commentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${API_URL}/${postId}/comments`,
    commentData,
    config
  );
  return response.data;
};

export default {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  addComment,
};