import { Star } from "lucide-react";
import React from "react";
import card1 from '../assets/svgs/card1.svg'
import card2 from '../assets/svgs/card2.svg'
import card3 from '../assets/svgs/card3.png'

export default function Stats() {
  return (
    <section className="main-container m-20 max-w-7xl mx-auto ">
      <h2 className="text-3xl md:text-6xl font-afacad font-bold text-white text-center mb-12">
        Real-world results.
      </h2>
      <div className="grid md:grid-cols-3 gap-12 px-4 xl:gap-24 mt-20 mb-12  mx-auto">
        {/* Rating Card */}
        <div className="relative bg-black/20 backdrop-blur-sm rounded-xl py-6 px-12 flex flex-col  items-center cs_shadow shadow-[#53295961] justify-center ">
          
          {/* Circular overlay with shadow */}
          <div className="absolute -top-20 -left-6 w-40 h-40 rounded-full bg-[#532959]/[38%] z-50 filter blur-2xl " />
            <img src={card1} className="w-14 h-14 text-purple-300" />
          <div className="relative z-10 flex ">
            <span className=" text-5xl xl:text-7xl font-bold text-[#DFB6B2] ">
              4.9
            </span>
            <span className="text-3xl xltext-5xl mt-2 text-nowrap ml-2 text-[#DFB6B2] ">
              38 reviews
            </span>
          </div>
        </div>
        <div className="relative bg-black/20 backdrop-blur-sm rounded-xl py-6 px-12 flex flex-col  items-center cs_shadow shadow-[#53295961] justify-center ">
          
          {/* Circular overlay with shadow */}
          <div className="absolute -bottom-20 right-1/2 w-40 h-40 rounded-full bg-[#532959]/[38%] z-50 filter blur-2xl "></div>
          <img src={card2} className="w-14 h-14 text-purple-300" />

          <div className="relative z-10 flex ">
            <span className=" text-5xl xl:text-7xl font-bold text-[#DFB6B2] ">
              +3k 
            </span>
            <span className="text-3xl xltext-5xl mt-2 text-nowrap ml-2 text-[#DFB6B2] ">
              Lessions
            </span>
          </div>
        </div>
        <div className="relative bg-black/20 backdrop-blur-sm rounded-xl py-6 px-12 flex flex-col  items-center cs_shadow shadow-[#53295961] justify-center ">
          
          {/* Circular overlay with shadow */}
          <div className="absolute -top-20 -right-6 w-40 h-40 rounded-full bg-[#532959]/[38%] z-50 filter blur-2xl "></div>
          <img src={card3} className="w-14 h-14 text-purple-300" />

          <div className="relative z-10 flex ">
            <span className=" text-5xl xl:text-7xl font-bold text-[#DFB6B2] ">
              +200
            </span>
            <span className="text-3xl xltext-5xl mt-2 text-nowrap ml-2 text-[#DFB6B2] ">
             Students
            </span>
          </div>
        </div>

        {/* Lessons Card */}
        {/* <div className="relative bg-black/40 rounded-lg p-6 flex flex-col h-48 items-center justify-center overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#532959]/[38%] filter blur-[60px]"></div>
          <div className="relative z-10 w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="relative z-10 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-[#DFB6B2] font-afacad">
              2k
            </span>
            <span className="text-2xl text-[#DFB6B2] font-afacad">Lessons</span>
          </div>
        </div> */}

        {/* Students Card */}
        {/* <div className="relative bg-black/40 rounded-lg p-6 flex flex-col h-48 items-center justify-center overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-[#532959]/[38%] filter blur-[60px]"></div>
          <div className="relative z-10 w-12 h-12 bg-purple-800/50 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="relative z-10 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-[#DFB6B2] font-afacad">
              +70
            </span>
            <span className="text-2xl text-[#DFB6B2] font-afacad">
              Students
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
