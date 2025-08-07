import React from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
const BlogLanding = () => {
  return (
    <section className="w-full   py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Block */}
        <div className="max-w-xl text-center md:text-left z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight">
            Unleashing Words. <br />
            <span className="text-primary-dull">Empowering Minds.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Dive into fresh perspectives on tech, business, lifestyle, and
            beyond. Each blog is brewed with bold thoughts and a pinch of Gen-Z
            flair.
          </p>
          <a href='#quoteoftheday'
            className="text-primary-dull border border-primary-dull hover:bg-primary-dull hover:text-white inline-block mt-8  font-medium py-3 px-6 rounded-full transition duration-300 shadow-lg"
          >
            Start Reading
          </a>
        </div>

        {/* Right Image Block */}
        <div className="w-full md:w-1/2 z-10">
          <img
            src={assets.heroImage}
            alt="Blog hero"
            className="w-full max-w-md mx-auto md:mx-0 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogLanding;
