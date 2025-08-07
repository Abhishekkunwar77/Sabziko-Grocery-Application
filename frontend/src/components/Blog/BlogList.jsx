import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import SkeletonCard from "./SkeletonCard"; // we’ll create this next
import BlogLanding from './BlogLanding';
import QuoteOfTheDay from './QuoteOfTheDay';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // track loading

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
    <BlogLanding/>
    <QuoteOfTheDay/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </>
  );
};

export default BlogList;
