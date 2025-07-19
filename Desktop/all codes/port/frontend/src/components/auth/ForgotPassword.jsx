import { useState } from 'react';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import authService from '../../api/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await authService.forgotPassword(email);
      setMessage('Password reset email sent. Please check your inbox.');
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
      setMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <h2>Forgot Password</h2>
      {message && <Alert type="success">{message}</Alert>}
      {error && <Alert type="danger">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;