import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FiUpload,
  FiImage,
  FiType,
  FiUser,
  FiFileText,
  FiSend,
} from "react-icons/fi";
import { MdTitle, MdSubtitles } from "react-icons/md";

const BlogForm = () => {
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem("blogFormData");
    return savedForm
      ? JSON.parse(savedForm)
      : {
          title: "",
          heading: "",
          subheading: "",
          content: "",
          author: "",
          image: null,
        };
  });
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    localStorage.setItem("blogFormData", JSON.stringify(form));
  }, [form]);

  const isFormValid =
    form.title &&
    form.heading &&
    form.subheading &&
    form.content &&
    form.author &&
    form.image;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });

    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      if (val !== null && val !== undefined) {
        data.append(key, val);
      }
    });

    const apiURL = import.meta.env.VITE_API_URL;

    try {
      const res = await fetch(`${apiURL}/api/blogs`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Blog post failed");
      }

      setForm({
        title: "",
        heading: "",
        subheading: "",
        content: "",
        author: "",
        image: null,
      });
      setPreview(null);
      localStorage.removeItem("blogFormData");
      toast.success("Blog published successfully!", {
        theme: "colored",
        style: {
          background: "#4BB543",
          color: "#fff",
        },
      });
    } catch (err) {
      console.error("Error posting blog:", err);
      toast.error("Failed to publish blog. Please try again.", {
        theme: "colored",
        style: {
          background: "#FF3333",
          color: "#fff",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[750px] mx-auto p-8 my-10 bg-white rounded-xl shadow-lg border border-gray-100">
      {" "}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Create New Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Input
            label="Blog Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            icon={<MdTitle className="text-gray-400" />}
            required
          />
          <Input
            label="Author Name"
            name="author"
            value={form.author}
            onChange={handleChange}
            icon={<FiUser className="text-gray-400" />}
            required
          />
          <Input
            label="Heading"
            name="heading"
            value={form.heading}
            onChange={handleChange}
            icon={<FiType className="text-gray-400" />}
            required
          />
          <Input
            label="Subheading"
            name="subheading"
            value={form.subheading}
            onChange={handleChange}
            icon={<MdSubtitles className="text-gray-400" />}
            required
          />
        </div>

        <TextArea
          label="Blog Content"
          name="content"
          value={form.content}
          onChange={handleChange}
          required
        />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <FiImage className="mr-2 text-gray-400" />
              Blog Featured Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {preview ? (
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto max-h-60 rounded-md object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setForm({ ...form, image: null });
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 hover:cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          name="image"
                          accept="image/*"
                          onChange={handleChange}
                          required={!preview}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 px-6 font-semibold rounded-lg text-white transition duration-300 flex items-center justify-center gap-2 ${
              isFormValid
                ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 cursor-pointer shadow-md"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Publishing...
              </>
            ) : (
              <>
                <FiSend className="text-lg" />
                Publish Blog Post
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({
  label,
  name,
  value,
  onChange,
  icon,
  required,
  placeholder,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <div className="relative rounded-md shadow-sm">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`block w-full ${
          icon ? "pl-10" : "pl-4"
        } pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500`}
      />
    </div>
  </div>
);

const TextArea = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={8}
      required={required}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

export default BlogForm;
