import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import { getBlogById } from "../firebase/actions";
import { Loader2 } from "lucide-react";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const fetchBlog = async () => {
      setIsLoading(true);
      try {
        const blogData = await getBlogById(id);
        setBlog(blogData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setIsLoading(false);
        setBlog(null);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  return (
    <>

      {
        isLoading ? <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
          <Loader2 className="animate-spin h-8 w-8" />
        </section> : (
          <section id="hero" className="bg-black pb-8 pt-32 md:pt-32">
            <div className="main-container">
              <div className="relative ">
                <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 z-20 h-full w-full" />
                <img
                  src={blog?.coverImage}
                  alt={`Course id ${blog?.id}`}
                  className="object-cover w-full h-36 md:h-[70vh] rounded-xl"
                />
              </div>
              <h1 className="text-[#DFB6B2] text-4xl md:text-6xl font-bold my-10">
                {blog?.metaData?.title}
              </h1>
              <p className="text-[#FBE5D8] text-2xl md:text-2xl font-light my-10">
                {blog?.metaData.description}
              </p>
              <div className="prose-lg lg:prose-2xl dark:prose-invert max-w-full text-white" dangerouslySetInnerHTML={{ __html: blog?.editorContent }} />
            </div>
          </section>
        )
      }

    </>
  );
};

export default BlogDetailPage;
