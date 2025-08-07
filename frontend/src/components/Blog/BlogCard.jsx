import { Link } from "react-router-dom";
import Header from "./BlogLanding";

const BlogCard = ({ blog }) => {
  const postedDate = new Date(blog.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="blogcard mt-10 border border-primary-dull  flex flex-col bg-white rounded-xl shadow hover:shadow-md transition h-full">
      <div className="  w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={`${import.meta.env.VITE_API_URL}${blog.imageUrl}`}
          alt={blog.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className=" flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-600 mt-1">{blog.subheading}</p>
          <p className="text-sm mt-1 text-gray-400">By {blog.author}</p>
        </div>

        {/* Bottom Row: Read More + Date */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <Link
            onClick={scrollTo(0, 0)}
            to={`/blogs/${blog._id}`}
            className="inline-block px-4 py-2 border border-primary text-primary rounded-lg font-medium transition duration-300 hover:bg-primary-dull hover:text-white"
          >
            Read More
          </Link>
          <span className="text-primary"> {postedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
