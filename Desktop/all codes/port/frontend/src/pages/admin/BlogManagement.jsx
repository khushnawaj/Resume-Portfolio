import { useState, useEffect } from 'react';
import { useBlog } from '../../context/BlogContext';
import BlogCard from '../../components/blog/BlogCard';
import Button from '../../components/ui/Button';

const BlogManagement = () => {
  const { posts, loading, error, fetchPosts } = useBlog();
  const [statusFilter, setStatusFilter] = useState('pending');

  useEffect(() => {
    fetchPosts({ status: statusFilter });
  }, [statusFilter, fetchPosts]);

  const handleApprove = (postId) => {
    // TODO: Implement approve functionality
    console.log('Approve post:', postId);
  };

  const handleReject = (postId) => {
    // TODO: Implement reject functionality
    console.log('Reject post:', postId);
  };

  return (
    <div className="blog-management">
      <h1>Blog Post Management</h1>
      <div className="filter-controls">
        <Button
          variant={statusFilter === 'pending' ? 'primary' : 'outline-primary'}
          onClick={() => setStatusFilter('pending')}
        >
          Pending
        </Button>
        <Button
          variant={statusFilter === 'published' ? 'primary' : 'outline-primary'}
          onClick={() => setStatusFilter('published')}
        >
          Published
        </Button>
        <Button
          variant={statusFilter === 'rejected' ? 'primary' : 'outline-primary'}
          onClick={() => setStatusFilter('rejected')}
        >
          Rejected
        </Button>
      </div>

      {loading && <div>Loading posts...</div>}
      {error && <div>Error: {error}</div>}

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post._id} className="post-item">
            <BlogCard post={post} />
            {statusFilter === 'pending' && (
              <div className="post-actions">
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => handleApprove(post._id)}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleReject(post._id)}
                >
                  Reject
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;