const fs = require('fs');
const path = require('path');

const structure = [
  'mern-portfolio/backend/config/db.js',
  'mern-portfolio/backend/config/config.js',
  'mern-portfolio/backend/controllers/authController.js',
  'mern-portfolio/backend/controllers/blogController.js',
  'mern-portfolio/backend/controllers/portfolioController.js',
  'mern-portfolio/backend/controllers/resumeController.js',
  'mern-portfolio/backend/controllers/userController.js',
  'mern-portfolio/backend/middleware/auth.js',
  'mern-portfolio/backend/middleware/errorHandler.js',
  'mern-portfolio/backend/middleware/roles.js',
  'mern-portfolio/backend/middleware/upload.js',
  'mern-portfolio/backend/models/BlogPost.js',
  'mern-portfolio/backend/models/Comment.js',
  'mern-portfolio/backend/models/Education.js',
  'mern-portfolio/backend/models/Experience.js',
  'mern-portfolio/backend/models/Project.js',
  'mern-portfolio/backend/models/ResumeTemplate.js',
  'mern-portfolio/backend/models/Skill.js',
  'mern-portfolio/backend/models/User.js',
  'mern-portfolio/backend/routes/authRoutes.js',
  'mern-portfolio/backend/routes/blogRoutes.js',
  'mern-portfolio/backend/routes/portfolioRoutes.js',
  'mern-portfolio/backend/routes/resumeRoutes.js',
  'mern-portfolio/backend/routes/userRoutes.js',
  'mern-portfolio/backend/services/emailService.js',
  'mern-portfolio/backend/services/pdfService.js',
  'mern-portfolio/backend/utils/helpers.js',
  'mern-portfolio/backend/utils/validators.js',
  'mern-portfolio/backend/uploads/.gitkeep',
  'mern-portfolio/backend/app.js',
  'mern-portfolio/backend/server.js',
  'mern-portfolio/frontend/public/index.html',
  'mern-portfolio/frontend/public/favicon.ico',
  'mern-portfolio/frontend/src/api/auth.js',
  'mern-portfolio/frontend/src/api/blog.js',
  'mern-portfolio/frontend/src/api/portfolio.js',
  'mern-portfolio/frontend/src/api/resume.js',
  'mern-portfolio/frontend/src/assets/images/.gitkeep',
  'mern-portfolio/frontend/src/assets/styles/.gitkeep',
  'mern-portfolio/frontend/src/assets/fonts/.gitkeep',
  'mern-portfolio/frontend/src/components/auth/Login.jsx',
  'mern-portfolio/frontend/src/components/auth/Register.jsx',
  'mern-portfolio/frontend/src/components/auth/ForgotPassword.jsx',
  'mern-portfolio/frontend/src/components/blog/BlogCard.jsx',
  'mern-portfolio/frontend/src/components/blog/BlogForm.jsx',
  'mern-portfolio/frontend/src/components/blog/BlogList.jsx',
  'mern-portfolio/frontend/src/components/blog/CommentSection.jsx',
  'mern-portfolio/frontend/src/components/common/Footer.jsx',
  'mern-portfolio/frontend/src/components/common/Header.jsx',
  'mern-portfolio/frontend/src/components/common/Layout.jsx',
  'mern-portfolio/frontend/src/components/common/PrivateRoute.jsx',
  'mern-portfolio/frontend/src/components/portfolio/About.jsx',
  'mern-portfolio/frontend/src/components/portfolio/Contact.jsx',
  'mern-portfolio/frontend/src/components/portfolio/Education.jsx',
  'mern-portfolio/frontend/src/components/portfolio/Experience.jsx',
  'mern-portfolio/frontend/src/components/portfolio/Projects.jsx',
  'mern-portfolio/frontend/src/components/portfolio/Skills.jsx',
  'mern-portfolio/frontend/src/components/resume/ResumeBuilder.jsx',
  'mern-portfolio/frontend/src/components/resume/ResumeForm.jsx',
  'mern-portfolio/frontend/src/components/resume/ResumePreview.jsx',
  'mern-portfolio/frontend/src/components/resume/TemplateSelector.jsx',
  'mern-portfolio/frontend/src/components/ui/Alert.jsx',
  'mern-portfolio/frontend/src/components/ui/Button.jsx',
  'mern-portfolio/frontend/src/components/ui/Card.jsx',
  'mern-portfolio/frontend/src/components/ui/Loader.jsx',
  'mern-portfolio/frontend/src/context/AuthContext.jsx',
  'mern-portfolio/frontend/src/context/BlogContext.jsx',
  'mern-portfolio/frontend/src/hooks/useAuth.js',
  'mern-portfolio/frontend/src/hooks/useForm.js',
  'mern-portfolio/frontend/src/pages/admin/AdminDashboard.jsx',
  'mern-portfolio/frontend/src/pages/admin/BlogManagement.jsx',
  'mern-portfolio/frontend/src/pages/admin/UserManagement.jsx',
  'mern-portfolio/frontend/src/pages/auth/LoginPage.jsx',
  'mern-portfolio/frontend/src/pages/auth/RegisterPage.jsx',
  'mern-portfolio/frontend/src/pages/blog/BlogDetailsPage.jsx',
  'mern-portfolio/frontend/src/pages/blog/BlogListPage.jsx',
  'mern-portfolio/frontend/src/pages/blog/CreateBlogPage.jsx',
  'mern-portfolio/frontend/src/pages/portfolio/AboutPage.jsx',
  'mern-portfolio/frontend/src/pages/portfolio/ContactPage.jsx',
  'mern-portfolio/frontend/src/pages/portfolio/HomePage.jsx',
  'mern-portfolio/frontend/src/pages/resume/ResumeBuilderPage.jsx',
  'mern-portfolio/frontend/src/pages/resume/ResumeTemplatesPage.jsx',
  'mern-portfolio/frontend/src/pages/404.jsx',
  'mern-portfolio/frontend/src/redux/slices/authSlice.js',
  'mern-portfolio/frontend/src/redux/slices/blogSlice.js',
  'mern-portfolio/frontend/src/redux/slices/portfolioSlice.js',
  'mern-portfolio/frontend/src/redux/store.js',
  'mern-portfolio/frontend/src/redux/actions.js',
  'mern-portfolio/frontend/src/styles/_variables.scss',
  'mern-portfolio/frontend/src/styles/base.scss',
  'mern-portfolio/frontend/src/styles/main.scss',
  'mern-portfolio/frontend/src/App.jsx',
  'mern-portfolio/frontend/src/index.jsx',
  'mern-portfolio/frontend/src/setupTests.js',
  'mern-portfolio/.env.example',
  'mern-portfolio/package.json',
  'mern-portfolio/README.md'
];

function createStructure() {
  structure.forEach(file => {
    const filePath = path.join(__dirname, file);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '');
    }
  });

  console.log('✅ Project structure created successfully.');
}

createStructure();
