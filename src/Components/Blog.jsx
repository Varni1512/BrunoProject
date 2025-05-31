import React, { useEffect, useState } from "react";
import { getBlogs } from "../firebase/actions";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section className="main-container my-12">
      <h2 className="text-3xl md:text-5xl font-afacad font-bold text-white text-center mb-4">
        Blogs
      </h2>
      <p className="text-[#FBE5D8] font-afacad text-center max-w-4xl mx-auto mb-12">
        Read more about latest news from Spanish destinations, or get tips on
        how to prepare to study Spanish at our language schools.
      </p>
      
      <div className="grid lg:grid-cols-3 gap-6 mb-8">

        {
         blogs ? (
          blogs.slice(0,3).map((blog, index) => (
            <div className="bg-black rounded-lg overflow-hidden p-4">
          <div className="flex justify-center">
            <img
              src={blog?.coverImage}
              alt="Blog 1"
              className="w-full h-60 rounded-lg object-cover"
            />
          </div>
          <div className="my-4">
            <div className="text-white font-afacad mb-2">
              January 17, 2025
            </div>
            <Link to={`/blogs/${blog?.id}`} className="text-xl hover:text-[#e4aaa4] md:text-2xl font-bold text-[#DFB6B2] font-afacad mb-2">
              {blog?.metaData?.title}
            </Link>
            <p className="text-[#FBE5D8]/80 font-afacad  mb-4 line-clamp-4">
            {blog?.metaData?.description}
            </p>
          </div>
        </div>
          ))
         ) : (
          <p className="text-center">Loading...</p>
         )
        }
        {/* Blog Card 1 */}
        

       
      </div>

      {/* View All Button with 3-color gradient */}
      <div className="flex justify-center">
        <a href="/blogs" className=" text-white font-afacad px-6 py-2 rounded-md animated-border">
          <span>View All</span> 
        </a>
      </div>
    </section>
  );
}
