import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import blogService from '../../api/blog';

const BlogForm = ({ isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: [],
    featuredImage: '',
  });
  const [tagInput, setTagInput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit && id) {
      const fetchPost = async () => {
        try {
          const post = await blogService.getBlogPost(id);
          setFormData({
            title: post.title,
            content: post.content,
            tags: post.tags,
            featuredImage: post.featuredImage,
          });
        } catch (err) {
          setError(err.message || 'Failed to fetch post');
        }
      };
      fetchPost();
    }
  }, [isEdit, id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTag = () => {
    if (tagInput && !formData.tags.includes(tagInput)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput],
      });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isEdit) {
        await blogService.updateBlogPost(id, formData);
      } else {
        await blogService.createBlogPost(formData);
      }
      navigate('/blog');
    } catch (err) {
      setError(err.message || 'Failed to save post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="blog-form">
      <h2>{isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
      {error && <Alert type="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
          />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <div className="tags-input">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Add a tag and press Enter"
            />
            <Button type="button" onClick={handleAddTag}>
              Add
            </Button>
          </div>
          <div className="tags-list">
            {formData.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
                <button
                  type="button"
                  className="remove-tag"
                  onClick={() => handleRemoveTag(tag)}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Featured Image URL</label>
          <input
            type="text"
            name="featuredImage"
            value={formData.featuredImage}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Post'}
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;