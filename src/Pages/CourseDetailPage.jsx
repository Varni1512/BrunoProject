import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { getCourseById } from "../firebase/actions";
import { Loader2 } from "lucide-react";
import StudentsReviews from "../Components/StudentsReviews";
const currencies = [
  { code: "INR", symbol: "₹" },
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "CA$" },
];
function CourseDetails() {
  const { id } = useParams();


  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const fetchCourse = async () => {
      setIsLoading(true);
      try {
        const courseData = await getCourseById(id);
        setCourse(courseData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Course:", error);
        setIsLoading(false);
        setCourse(null);
      }
    };
    if (id) {
      fetchCourse();
    }
  }, [id]);

  return (
    <>
      {
        isLoading ? <section id="hero" className="bg-black h-screen w-full flex pt-32 justify-center">
          <Loader2 className="animate-spin h-8 w-8" />
        </section> : (
          <>
            <section id="hero" className="mt-8 pt-24 md:pt-24 bg-black">
              <div className="main-container">
                <div className="relative ">
                  <div className="bg-gradient-to-b from-transparent to-black absolute top-0 left-0 z-20 h-full w-full" />
                  <img
                    src={course?.coverImage}
                    alt={`Course id ${course?.id}`}
                    className="object-cover w-full h-36 md:h-[70vh] rounded-xl"
                  />

                </div>

                <h1 className="text-[#DFB6B2] text-4xl md:text-6xl font-bold my-3">
                  {course?.title}
                </h1>
                <h3 className="text-[#FBE5D8AD] text-lg md:text-xl font-bold my-3">
                  {course?.subTitle}
                </h3>
          
                <div className="my-5 md:flex gap-4">
                  <StarRating rating={course?.ratings} />
                  <p className="text-lg md:text-xl my-2 md:my-0">
                    {course?.ratings} ({course?.reviews} reviews )
                  </p>
                  <p className="text-lg md:text-xl  my-2 md:my-0">
                    {course?.studentsEnrolled} enrolled on this course
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold mb-1 ">Description</h3>
                  <p className="text-lg md:text-xl font-light mb-5 leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h3 className="text-4xl md:text-6xl font-bold mb-2">Requirements</h3>
                  <div className="prose lg:prose-xl  text-white dark:prose-invert max-w-full" dangerouslySetInnerHTML={{ __html: course?.requirements }} />

                </div>

                <div className="text-2xl text-center  py-4 border-[1px] border-white mb-6  rounded-lg ">
                  <span className="font-bold bg-gradient-to-r from-[#412345] to-[#DFB6B2] bg-clip-text text-transparent">Price: {currencies.filter((curr) => curr.code === course?.currency)[0]?.symbol}{course?.price}</span>
                </div>
                <Link to="https://koalendar.com/e/30-follow-up-session-with-bruno" target="_blank" className="w-full  relative  flex items-center justify-center min-w-full text-2xl text-center py-4  rounded-lg animated-border">
                  <span>Book a Free Call</span> 
                </Link>
              </div>
            </section>

            <section  className=" bg-black py-8 md:py-16">
              <StudentsReviews/>
            </section>
          </>
        )
      }


    </>
  );
}

export default CourseDetails;
