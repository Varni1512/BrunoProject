import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <section  className="w-full mt-20 pb-8 px-4 sm:px-14 text-center relative  z-10">
      <div
        className="absolute hidden md:block w-[50px] h-full top-1/2 -translate-y-1/2 right-0 rounded-3xl bg-[#dfb6b2]/[19%]"
      />
      <div
        className="absolute hidden md:block w-[50px] h-full top-1/2 -translate-y-1/2 left-0 rounded-3xl bg-[#dfb6b2]/[19%]"

      />

      <h1 className="text-5xl md:text-7xl font-bold  text-white max-w-6xl mx-auto">
        <span>A </span>
        <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] text-transparent bg-clip-text">
        Spanish,
        </span>{" "}
        <span>Real </span>
        <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] text-transparent bg-clip-text">
        Interactions,
        </span>{" "}
        <br className="hidden xl:block" />
        <span>Real </span>
        <span className="font-afacad bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2] text-transparent bg-clip-text">
        Progress.
        </span>{" "}
    
      </h1>
      <p className="font-afacad mt-6  md:text-xl text-[#FBE5D8] mx-auto mb-16">
      Beyond apps and isolation - we use cutting-edge technology to  enhance genuine human connection, not replace it.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row justify-center text-xl">
        <Link to="https://koalendar.com/e/30-follow-up-session-with-bruno" target="_blank" className=" cursor-pointer font-afacad px-16 py-3  text-white rounded-lg animated-border">
          <span>Book a Free Call</span>
        </Link>
        <button className="cursor-pointer invert-animated-border font-afacad px-16 py-3 relative   text-white rounded-md">
        <span >Read More</span> 
        </button>
      </div>
    </section>
  );
}
