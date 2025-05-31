import React from "react";
import image1 from "../assets/LearningOnline1.jpg";
import image2 from "../assets/LearningOnline2.jpg";
import image3 from "../assets/LearningOnline3.jpg";

export default function LearningOnline() {
  return (
    <section className="main-container mt-12 md:mt-0">
      <h2 className="text-3xl md:text-5xl font-afacad font-bold text-white text-center mt-4 mb-8 md:mb-12">
        Learn Spanish The Human Way
      </h2>

      {/* Top grid layout */}
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 mb-8">
        {/* Left card */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col p-5">
          <div className="w-full">
            <img
              src={image1}
              alt="Student practicing speaking"
              className="w-full h-[369px] rounded-2xl object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-between  h-full ">
            <h3 className="text-xl md:text-2xl font-afacad font-bold text-[#DFB6B2] my-2">
              Conversation-Based Lessons
            </h3>
            <p className="text-white text-base md:text-xl">
              "Unless your goal involves other language aspects, you'll always learn towards
              mastering real Spanish interactions, with materials built around your interests and
              values."
            </p>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-black rounded-lg overflow-hidden flex flex-col h-full p-5">
          <div className="w-full flex justify-center items-center">
            <img
              src={image2}
              alt="Personalized feedback"
              className="w-full h-[260px]  object-cover rounded-2xl object-top"
            />
          </div>
          <div className="flex-1 mt-2">
            <h3 className="text-xl md:text-3xl  font-afacad font-bold text-[#DFB6B2] mb-2 ">
              Spanish (From Spain) with Latin American Touches
            </h3>
            <p className="text-white text-base md:text-2xl">
              "You never know where your next adventure will take you. While we focus on
              native Spanish accents and expressions, we'll also explore Latin American
              variations - especially relevant since 8.5% of Spain's population comes from
              South and Central America."
            </p>
          </div>
        </div>
      </div>

      {/* Full-width bottom card */}
      <div className="bg-black rounded-lg overflow-hidden mb-8 p-5">
        <div className="w-full">
          <img
            src={image3}
            alt="Different accents"
            className="w-full h-[399px] rounded-xl object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-2xl md:text-2xl font-afacad font-bold text-[#DFB6B2] my-2">
            Personalized Feedback Without Interrupting the Flow
          </h3>
          <p className="text-white text-base md:text-xl">
            "Your mistakes and growth opportunities are continuously tracked, so your
            Spanish evolves with every session."
          </p>
        </div>
      </div>
    </section>
  );
}
