import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const BlogCard = ({ post, isOwner = false }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <h3>
          <Link to={`/blog/${post._id}`}>{post.title}</Link>
        </h3>
        <div className="blog-meta">
          <span>By {post.author?.username}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="blog-card-body">
        <p>{post.excerpt || post.content.substring(0, 150)}...</p>
      </div>
      <div className="blog-card-footer">
        <div className="tags">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {isOwner && (
          <div className="actions">
            <Button
              as={Link}
              to={`/blog/edit/${post._id}`}
              variant="outline-primary"
              size="sm"
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;