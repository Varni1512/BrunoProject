import React, { useEffect, useRef } from "react";
import image from "../assets/About.jpg";
import spain from "../assets/spain.png";
import english from "../assets/english.png";
import logo from "../assets/NEW.png";
import { useLocation } from "react-router-dom";

export default function About() {
  const [expanded, setExpanded] = React.useState(false);
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#aboutt' && aboutRef.current) {
      const offset = 100; // adjust this to match your nav height
      const elementPosition = aboutRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <div ref={aboutRef} id="aboutt" className="relative mx-auto bg-[#000000] py-12 md:py-24 overflow-hidden">
      <div className="main-container">
        {/* Top section with image and text */}
        <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left: Image with purple strip */}
          <div className="relative flex justify-center">
            {/* Purple Tilted Strip - Left */}
            <div className="absolute -left-4 top-10 -rotate-12 w-50 h-15 bg-[#19001c] rounded-lg z-0"></div>

            <img
              src={image}
              alt="Bruno S"
              className="rounded-xl w-full md:w-[95%] max-w-[500px] h-auto object-cover shadow-lg relative z-10"
            />
          </div>

          {/* Right: Text with purple strip below */}
          <div className="text-white relative text-center md:text-start">
            <h2 className="text-7xl font-extrabold mb-4">
              <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#532959] text-transparent bg-clip-text">
                Bruno S.
              </span>
            </h2>
            <p className="light-txt-color text-xl mb-4 md:pr-16">
              Native Spanish Conversational-Based Teacher · Wide National and
              International Background
            </p>
            <p className="primary-txt-color text-base md:text-lg leading-relaxed mb-4">
              I was born in Burgos, a province considered one of the cradles of the Spanish
              language. With five and a half years of teaching experience both online and in-
              person, I bring a unique perspective shaped by my Sports Sciences degree, which
              provided me with effective teaching methodologies that I apply to language
              learning—because like sports, languages require dedication and motivation.
            </p>
            {
              expanded && (
                <>
                  <p className=" primary-txt-color text-base md:text-lg leading-relaxed mb-4">
                    As someone currently learning my forth language (Polish), and having lived in four
                    different countries (Spain, Italy, the UK, and Poland), I understand firsthand the
                    challenges and excitement of mastering a new language from scratch, as well as
                    the struggles of starting a new life in a foreign land. These ongoing experiences
                    keep me connected to the learner's perspective and inform my teaching
                    approach.

                  </p>
                  <p className=" primary-txt-color text-base md:text-lg leading-relaxed mb-4">
                    My passion for helping others with Spanish evolved naturally from assisting
                    international friends to developing a professional teaching practice. After working
                    with hundreds of students, as well as taking different teaching courses from
                    renowned coaches, I've discovered the most effective methods while always
                    adapting to each individual's specific needs and learning style.
                  </p>
                  <p className="primary-txt-color text-base md:text-lg leading-relaxed mb-4">

                    As for my personal life, Iʼm an avid rock climber and roller skater; and a bit of a
                    geek when it comes to healthy lifestyle and spirituality
                  </p>
                </>
              )
            }
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-afacad mt-2 text-lg px-5 py-2 invert-animated-border primary-txt-color rounded-md ">
              <span>{expanded ? 'Show Less' : 'Read More'}</span>
            </button>
            <div className="mt-8 text-center md:text-start relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-8 md:mb-4">
                I Speak
              </h3>
              <div className="flex justify-center sm:justify-between  gap-4 md:gap-16 flex-wrap md:flex-nowrap">
                {/* Spanish */}
                <div className="flex items-center relative bg-[#180018] rounded-full md:w-full  py-2 md:py-3.5 pl-12  md:pl-14 pr-2 md:pr-4 ">
                  <div className="h-10 w-10 md:w-12 md:h-12 absolute left-0 rounded-full overflow-hidden">
                    <img
                      src={spain}
                      alt="Spanish"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-afacad text-white text-sm md:text-lg font-semibold -mt-px">Spanish</span>
                </div>

                {/* English */}
                <div className="flex items-center relative bg-[#180018] rounded-full md:w-full  py-2 md:py-3.5 pl-12  md:pl-14 pr-2 md:pr-4 ">
                  <div className="h-10 w-10 md:w-12 md:h-12 absolute left-0 rounded-full overflow-hidden">
                    <img
                      src={english}
                      alt="English"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-afacad text-white text-sm md:text-lg font-semibold -mt-px">English</span>
                </div>

                {/* Italian */}
                <div className="flex items-center relative bg-[#180018] rounded-full md:w-full  py-2 md:py-3.5 pl-12  md:pl-14 pr-2 md:pr-4">
                  <div className="h-10 w-10 md:w-12 md:h-12 absolute left-0 rounded-full overflow-hidden">
                    <img
                      src={logo}
                      alt="Italian"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <span className="font-afacad text-white text-sm md:text-lg font-semibold -mt-px">Italian</span>
                </div>
              </div>
            </div>



          </div>
        </div>

        {/* Bottom: Languages */}

      </div>
      <div>
      <h2 className="text-3xl mt-20 md:mt-32 md:text-5xl font-afacad font-bold text-white text-center mb-6 px-4">
                   My Approach
                </h2>
                <p className="text-[#FBE5D8]  md:text-xl tracking-wider font-afacad text-center max-w-6xl mx-auto  leading-relaxed px-4">
                “ My goal is creating an immersive experience that brings Spanish-speaking culture and language into your life, regardless of where you live. I foster a friendly, comfortable environment where you feel like you're talking with an old friend—because emotional comfort is fundamental to effective language learning. I use diverse materials including books, articles, music, films, and custom content I create using AI tools and creativity, all tailored to your level and learning “
                </p>
      </div>
    </div>
  );
}
