import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiClock, FiUser, FiCalendar, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/blogs/${id}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError(err.message || "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-start mb-6">
          <Skeleton width={100} height={40} />
        </div>
        <Skeleton height={400} className="mb-6 rounded-xl" />
        <Skeleton count={1} height={40} className="mb-4" />
        <Skeleton count={1} height={30} width="70%" className="mb-6" />
        <div className="flex items-center gap-4 mb-6">
          <Skeleton circle width={40} height={40} />
          <Skeleton width={150} height={20} />
        </div>
        <Skeleton count={8} height={20} className="mb-2" />
      </div>
    );
  }

  if (error) {
    return (
      <div className=" max-w-4xl 2xl:max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-5 rounded-lg mb-4">
          {error}
        </div>
        <Link
          to="/"
          className="blogcard inline-flex items-center text-primary hover:text-primary-dull transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to home
        </Link>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Blog post not found</p>
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dull transition-colors mt-4"
        >
          <FiArrowLeft className="mr-2" />
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl  overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_URL}${blog.imageUrl}`}
          alt={blog.title}
          className="w-full h-96 object-cover object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/1600x800?text=Blog+Image";
          }}
        />

        <div className="p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <FiUser className="mr-2" />
              <span className="font-medium text-gray-700">{blog.author}</span>
            </div>
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-2" />
              <span>
                {Math.ceil(blog.content.split(" ").length / 200)} min read
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            {blog.title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
            {blog.subheading}
          </h2>

          <div className="border-t border-gray-100 pt-8">
            <div
              className="prose prose-lg max-w-none lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link onClick={scrollTo(0,0)}
          to="/blogs"
          className="inline-flex items-center px-5 py-3 border border-primary-dull rounded-lg text-primary-dull hover:bg-primary hover:text-white transition-colors text-lg"
        >
          <FiArrowLeft className="mr-2" />
          View all posts
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
