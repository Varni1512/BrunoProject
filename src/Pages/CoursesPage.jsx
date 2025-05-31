import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../firebase/actions";
import { Loader2 } from "lucide-react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const courseData = await getCourses();
        setCourses(courseData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching Courses:", error);
      }
    };

    fetchCourses();
  }, []);

 

  return (
    <>
      {
        isLoading ? (

          
          <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
            <Loader2 className="animate-spin h-8 w-8" />
          </section>
        ) : (
          <>
         {
            courses.length === 0 && !isLoading && (
              <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
                <p>No blogs found</p>
              </section>
            )
        
          }
            <section id="hero" className="bg-black pb-8 pt-24 md:pt-24">
              <div className="main-container py-6">
                <h1 className="text-6xl text-center font-bold mb-3">Courses</h1>
                <p className="text-[#FBE5D8] text-3xl text-center font-light ">
                  Self-study courses for busy learners
                </p>
              </div>
            </section>

            <section id="cards" className="bg-black pb-8 ">
              <div className="main-container max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {courses.map((course, index) => {
                    const isLastOdd =
                      courses.length % 2 !== 0 && index === courses.length - 1;

                    return (
                      <div
                        key={course?.id}
                        className={`rounded-2xl overflow-hidden bg-[#080808] flex flex-col h-full drop-shadow-[6px_2px_4px_#53295970]
              ${isLastOdd ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}`}
                      >
                        <div className="w-full">
                          <img
                            src={course?.coverImage}
                            alt={`Course id ${course?.id}`}
                            className="object-cover w-full h-60"
                          />
                        </div>
                        <div className="py-2 px-4 flex flex-col flex-grow">
                          <h3 className="text-[#DFB6B2] text-xl md:text-2xl font-bold ">
                            {course?.title}
                          </h3>
                          <p className="text-[#FBE5D8] text-base md:text-lg font-light mb-2 flex-grow line-clamp-2">
                            {course?.description}
                          </p>
                          <Link
                            to={`/courses/${course?.id}`}
                            className="text-2xl rounded-xl overflow-hidden bg-black cursor-pointer group hover_class block py-2 text-center mt-auto"
                          >
                            <span className="group-hover:text-white rounded-3xl bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] bg-clip-text text-transparent">
                              Start Learning
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
}

export default Courses;
