import { Star } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const testimonials = [
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.offsetWidth;
      container.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="bg-black md:hidden">
      <div className="main-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-afacad text-white text-center mb-12">
          What my students say
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="snap-start flex-shrink-0 w-full "
              style={{ minWidth: "100%" }}
            >
              <div className="bg-neutral-950 rounded-lg py-4 px-6 flex flex-col h-full">
                <div className="text-center mb-4">
                  <h3 className="font-bold font-afacad text-[#DFB6B2] text-xl">{testimonial.name}</h3>
                  <div className="font-afacad italic text-[#DFB6B2] text-xs mt-1">
                    {testimonial.date}
                  </div>
                  <div className="flex gap-2 justify-center text-[#FFBF10] mt-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-afacad text-[#FBE5D8]  flex-grow">
                  {testimonial.text}
                </p>
             
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
