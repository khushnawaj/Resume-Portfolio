import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

const CommentSection = ({ comments, postId, onCommentAdded }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError('Comment cannot be empty');
      return;
    }
    try {
      await onCommentAdded(postId, { content });
      setContent('');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to add comment');
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments ({comments.length})</h3>
      {user && (
        <form onSubmit={handleSubmit} className="comment-form">
          {error && <Alert type="danger">{error}</Alert>}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment..."
            rows="3"
          />
          <Button type="submit" variant="primary" size="sm">
            Post Comment
          </Button>
        </form>
      )}
      <div className="comments-list">
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((comment) => (
            <div key={comment._id} className="comment">
              <div className="comment-header">
                <strong>{comment.author.username}</strong>
                <span>
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="comment-body">{comment.content}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;