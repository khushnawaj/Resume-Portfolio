import { useAuth } from '../../hooks/useAuth';

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-welcome">
        <p>Welcome, {user?.username}!</p>
      </div>
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Pending Posts</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <h3>Published Posts</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;