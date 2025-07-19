import { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // TODO: Fetch users from API
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // const data = await userService.getUsers();
        // setUsers(data);
        setUsers([]); // Temporary empty array
      } catch (err) {
        setError(err.message || 'Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    // TODO: Implement delete functionality
    console.log('Delete user:', userId);
  };

  const handleRoleChange = (userId, newRole) => {
    // TODO: Implement role change functionality
    console.log('Change role for user:', userId, 'to', newRole);
  };

  return (
    <div className="user-management">
      <h1>User Management</h1>
      {loading && <div>Loading users...</div>}
      {error && <div>Error: {error}</div>}

      <table className="users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user._id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;