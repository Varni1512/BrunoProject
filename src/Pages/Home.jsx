import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import WhyLearn from "../Components/WhyLearn";
import LearningOnline from "../Components/LearningOnline";
import VideoSection from "../Components/VideoSection";
import Resources from "../Components/Resources";
import Events from "../Components/Events";
import Blog from "../Components/Blog";
import Stats from "../Components/Stats";
import FAQ from "../Components/FAQ";
import Banner from "../Components/Banner";
import StudentsReviews from "../Components/StudentsReviews";
import Commmunity from "../Components/Community";
import Achievements from "../Components/Achievements";

const Home = () => {
  return (
    <>
      <section id="hero" className="h-screen flex items-center w-full">
        <Hero />
      </section>
      <section id="about" className="mb-8">
        <About />
      </section>
      <div className="max-w-[1340px] mx-auto">
        <Commmunity />
        <WhyLearn />
      </div>
      <div className="bg-black">
        <Achievements />
      </div>
      <div className="max-w-[1340px] mx-auto">
        <LearningOnline />
        <VideoSection />
      </div>
      <Resources />
      <Events />
      <div className="max-w-[1340px] mx-auto">
        <Blog />
      </div>
      <section id="testimonials" className=" bg-black py-8">
        <StudentsReviews />
        <Stats />
      </section>
      <FAQ />
      <Banner />
    </>
  );
};

export default Home;
