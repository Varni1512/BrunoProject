import React, { useEffect, useState } from "react";
// import blogs from '../data/blogs'
import { Link } from "react-router-dom";
import { getBlogs } from "../firebase/actions";
import { Loader2 } from "lucide-react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);


  return (
    <>
      {
        isLoading ? <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
          <Loader2 className="animate-spin h-8 w-8" />
        </section> : (
          <>

            {
              blogs.length === 0 && !isLoading(
                <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
                  <p>No blogs found</p>
                </section>
              )
            }
            <section id="hero" className="bg-black  pb-8 pt-24 md:pt-24">
              <div className="main-container py-6">
                <h1 className="text-6xl text-center font-bold mb-3">Blogs</h1>
                <p className="text-[#FBE5D8] text-3xl max-w-5xl mx-auto text-center font-light">
                  Read more about latest news from Expanish destinations, or get tips
                  on how to prepare to study Spanish at our language schools.
                </p>
              </div>
            </section>

            <section id="cards" className="bg-black pb-8 ">
              <div className="main-container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {blogs.map((blog, index) => {
                    const isLastOdd =
                      blogs.length % 2 !== 0 && index === blogs.length - 1;

                    return (
                      <div
                        key={blog.id}
                        className={`rounded-2xl overflow-hidden bg-[#080808] flex flex-col h-full drop-shadow-[0_4px_10px_#532959]
                    ${isLastOdd ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}`}
                      >
                        <div className="w-full">
                          <img
                            src={blog?.coverImage}
                            alt={`blog id ${blog.id}`}
                            className="object-cover w-full h-60"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <h3 className="text-[#DFB6B2]  text-xl md:text-2xl font-bold mb-3">
                            {blog?.metaData?.title}
                          </h3>
                          <p className="text-[#FBE5D8] text-base line-clamp-4 md:text-lg font-light mb-2 flex-grow">
                            {blog?.metaData?.description}
                          </p>
                          <Link
                            to={`/blogs/${blog.id}`}
                            className="text-xl inline-block w-fit"
                          >
                            <span className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
                              Read More
                            </span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )
      }

    </>
  );
};

export default BlogsPage;
