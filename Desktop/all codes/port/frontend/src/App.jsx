import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// Layout
import Layout from './components/common/Layout';

// Pages
import HomePage from './pages/portfolio/HomePage';
import AboutPage from './pages/portfolio/AboutPage';
import ContactPage from './pages/portfolio/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import BlogListPage from './pages/blog/BlogListPage';
import BlogDetailsPage from './pages/blog/BlogDetailsPage';
import CreateBlogPage from './pages/blog/CreateBlogPage';
import ResumeBuilderPage from './pages/resume/ResumeBuilderPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogManagement from './pages/admin/BlogManagement';
import UserManagement from './pages/admin/UserManagement';
import NotFoundPage from './pages/404';

// Private Routes
import PrivateRoute from './components/common/PrivateRoute';
import AdminRoute from './components/common/AdminRoute';

// Styles
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="blog" element={<BlogListPage />} />
              <Route path="blog/:id" element={<BlogDetailsPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="resume-builder" element={<ResumeBuilderPage />} />

              {/* Private Routes */}
              <Route element={<PrivateRoute />}>
                <Route path="create-blog" element={<CreateBlogPage />} />
              </Route>

              {/* Admin Routes */}
              <Route element={<AdminRoute />}>
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="admin/blog" element={<BlogManagement />} />
                <Route path="admin/users" element={<UserManagement />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;