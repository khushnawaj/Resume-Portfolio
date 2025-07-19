import { createContext, useContext, useState, useEffect } from 'react';
import blogService from '../api/blog';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async (params = {}) => {
    try {
      setLoading(true);
      const data = await blogService.getBlogPosts(params);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (postData) => {
    try {
      const newPost = await blogService.createBlogPost(postData);
      setPosts([newPost, ...posts]);
      return newPost;
    } catch (err) {
      throw err;
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const updatedPost = await blogService.updateBlogPost(id, postData);
      setPosts(posts.map(post => post._id === id ? updatedPost : post));
      return updatedPost;
    } catch (err) {
      throw err;
    }
  };

  const deletePost = async (id) => {
    try {
      await blogService.deleteBlogPost(id);
      setPosts(posts.filter(post => post._id !== id));
    } catch (err) {
      throw err;
    }
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        loading,
        error,
        fetchPosts,
        createPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};