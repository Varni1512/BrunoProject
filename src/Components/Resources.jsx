import React from "react";
import image from "../assets/Resources.jpg";
import heart from "../assets/heart.png";
import image_5 from "../assets/resources/image_5.svg";
import image_6 from "../assets/resources/image_6.svg";
import image_7 from "../assets/resources/image_7.svg";
import image_8 from "../assets/resources/image_8.svg";

export default function Resources() {
  const resources = [
    {
      title: "Personalized homework and recap sessions",
      icon: image_5,
    },
    {
      title: "Cultural recommendations tailored to your interests (music, series, podcasts...)",
      icon: image_6,
    },
    {
      title: "Simple daily techniques to taste Spanish every day",
      icon: image_7,
    },
    {
      title: "How to find and connect with Spanish speakers in your area",
      icon: image_8,
    },
  ];

  return (
    <section className="relative bg-black overflow-hidden py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-5xl font-afacad font-bold text-white text-center mb-4">
          Dive Into Your Spanish Adventure 
        </h2>
        <p className="text-[#DFB6B2] font-afacad text-center max-w-5xl mx-auto mb-12 text-base sm:text-lg">
          I'll help you create and navigate your Spanish world - no matter where you live. 
        </p>

        <div className="grid lg:grid-cols-3 gap-6 items-start max-w-full mx-auto">
          <div className="flex flex-col gap-6 md:gap-24 order-2 lg:order-1">
            {resources.slice(0, 2).map((res, idx) => (
              <div
                key={idx}
                className={
                  `bg-black/40 rounded-xl p-4 border lg:border-none border-purple-900/20 hover:border-purple-900/40 transform hover:scale-[1.02] transition-transform
                  ${idx === 1 && "lg:ml-12"}
                  `
                }
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 min-w-12 lg:min-w-24 lg:w-24 lg:h-24 rounded-full bg-[#180018] flex items-center justify-center md:border-none border border-purple-700/30">
                  <img
              src={res.icon}
              alt="Learning Resources"
              className="h-6 w-6 md:h-11 md:w-11 object-cover"
            />
                  </div>
                  <h3 className="text-sm lg:text-lg font-medium text-[#DFB6B2] font-afacad">
                    {res.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex relative justify-center items-center order-1">
            <img
              src={image}
              alt="Learning Resources"
              className="rounded-3xl z-20 w-full max-w-sm sm:max-w-md h-60 object-cover shadow-xl border border-purple-900/30 transform hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={heart}
              alt="Learning Resources"
              className="rounded-3xl w-full max-w-sm sm:max-w-md h-80 overflow-visible absolute object-cover shadow-xl  transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col gap-6 md:gap-24 order-2 lg:order-1">
            {resources.slice(2).map((res, idx) => (
              <div
                key={idx}
                className={`
                  bg-black/40 rounded-xl p-4 border lg:border-none border-purple-900/20 hover:border-purple-900/40 transform hover:scale-[1.02] transition-transform
                  ${idx === 1 && "lg:-ml-12"}
                  `}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 min-w-12 lg:min-w-24 lg:w-24 lg:h-24 rounded-full bg-[#180018] flex items-center justify-center border md:border-none border-purple-700/30">
                  <img
              src={res.icon}
              alt="Learning Resources"
              className="h-6 w-6 md:h-11 md:w-11 object-cover"
            />
                  </div>
                  <h3 className="text-sm lg:text-lg font-medium text-[#DFB6B2] font-afacad">
                    {res.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
