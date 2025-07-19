import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;