import React from "react";
import image from "../assets/Events.png";
import giffy from "../assets/svgs/giffy.gif";
import { Link } from "react-router-dom";
export default function Events() {
  return (
    <section className="bg-black overflow-hidden relative py-8 px-4 ">
      {/* giffy start */}
      
      
      
      {/* giffy end  */}
      <div className="max-w-3xl lg:max-w-5xl mx-auto z-50 ">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-afacad text-center mb-4">
          Join Our Next Webinars and Community Events
        </h2>
        <p className="text-[#DFB6B2] font-afacad text-base md:text-lg text-center max-w-4xl  mx-auto mb-4 md:mb-12">
          Connect with fellow Spanish learners through interactive webinars and cultural events. From 2-hour intensive courses, to friendly conversation circles - there's a place for everyone.
        </p>


        <section className=" relative">

        {/* Image */}
        <img
        src={giffy}
        alt="Giffy"
        className="absolute -top-8 md:top-0 -right-[49%] h-[200px] md:h-[500px] overflow-visible object-contain"
      />
       <img
        src={giffy}
        alt="Giffy"
        className="absolute -top-8 md:top-0 -left-[49%] h-[200px] md:h-[500px] overflow-visible object-contain"
      />

            {/* Img end  */}




        <div className="bg-[#212121] rounded-lg overflow-hidden mx-4 md:mx-0 shadow-lg ">
      
          <div className="relative h-32 sm:h-56 md:h-70 w-full ">
            
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-black/50 to-black/20"/>
            <img
              src={image}
              alt="Event"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-x-0 top-0 text-xs md:text-lg flex justify-between  md:p-4 bg-gradient-to-b from-black/40 to-transparent">
              <div className="font-afacad text-white   px-3 py-1 rounded-full">
                Date: June 17, 2025
              </div>
              <div className="font-afacad text-white   px-3 py-1 rounded-full">
                Time: 06:00 PM
              </div>
            </div>
          </div>

          {/* Content Section Below Image */}
          <div className=" p-2 md:p-4 relative
          bg-neutral-950 text-center">
            <h3 className="text-base md:text-2xl font-bold text-[#DFB6B2] font-afacad mb-1">
              Mastering Spanish ER Verbs in the Present Tense
            </h3>
            <p className="text-[#FBE5D8] font-afacad mb-2 md:mb-6 text-[10px] sm:text-xs md:text-base">
              Join Pablo in this interactive session focusing on the conjugation
              and usage of Spanish ER verbs in the present tense. Enhance your
              grammar skills with practical examples and exercises.
            </p>
            <div className=" hidden md:flex justify-center">
              <Link to="https://koalendar.com/e/30-follow-up-session-with-bruno" target="_blank" className=" text-white rounded-md  md:px-8  px-4 py-1 md:py-2  font-afacad animated-border">
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>

        </section>
        


        <div className=" md:hidden flex mt-12 justify-center">
              <button className="bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-white rounded-md hover:from-[#5d2f63] hover:via-[#8d5674] hover:to-[#e5c1bd] md:px-8  px-4 py-1 md:py-2 transition-all duration-300 font-afacad shadow-lg hover:shadow-purple-900/30">
                Register Now
              </button>
            </div>
      </div>
    </section>
  );
}
