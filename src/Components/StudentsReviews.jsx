import React from "react";
import { FaStar } from "react-icons/fa";
import Testimonials from "./Testimonials";


const studentReviews = [
    {
      name: "Nicole",
      date: "January 16, 2023",
      text: "Bruno is so good! His conversation flows nicely and he is on top of correcting your sentences and typing your weak points into homework. He makes learning Spanish a lot...",
    },
    {
      name: "Claudio",
      date: "January 9, 2023",
      text: "I have now been doing a month worth of lessons with Bruno and I need to say he's an excellent tutor. His lessons are interactive and he really tailors them to all my learning needs in...",
    },
    {
      name: "Kelly",
      date: "September 18, 2024",
      text: "I've been taking lessons with Bruno since Spring '24. He's super prepared and engaging, which makes lessons a pleasure! He tailors lessons to your skill level and goals, keeping progress real.",
    },
    {
      name: "Jaroslav",
      date: "August 29, 2024",
      text: "I'm studying with Bruno for several months already, can see significant progress! Bruno is not only good spanish teacher, but such a nice mentor/tutor.",
    },
    {
      name: "Stefan",
      date: "May 25, 2024",
      text: "I am pleased to provide a recommendation for Bruno, who I've been working with for almost half a year. Bruno is always prepared to teach. He knows where we left off and what we need.",
    },
    {
      name: "Goran",
      date: "May 25, 2024",
      text: "Bruno is a teacher whom I highly recommend. He takes the time to follow your progress and explains things well, which helps you learn quickly.",
    },
  ];

const StudentsReviews = () => {
  return (
    <>
      <div className="main-container hidden md:block max-w-7xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold my-8">
          What my students say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6">
          {studentReviews.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#080808] transition-all duration-300 "
            >
              <h3 className="text-[#DFB6B2] text-2xl text-center font-bold">
                {item.name}
              </h3>
              <p className="text-[#DFB6B2] text-lg text-center font-light mb-2">
                {item.date}
              </p>
              <div className="mb-3 text-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="inline-block text-[#FFBF10]" size={24} />
                ))}
              </div>
              <p className="text-[#FBE5D8] text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default StudentsReviews;
