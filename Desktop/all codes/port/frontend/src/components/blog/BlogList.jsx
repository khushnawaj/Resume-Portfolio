import BlogCard from './BlogCard';
import { useBlog } from '../../context/BlogContext';

const BlogList = () => {
  const { posts, loading, error } = useBlog();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-list">
      {posts.length === 0 ? (
        <div>No blog posts found</div>
      ) : (
        posts.map((post) => <BlogCard key={post._id} post={post} />)
      )}
    </div>
  );
};

export default BlogList;