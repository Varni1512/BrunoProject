import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass = () =>
    `text-xl mr-4 transition-all duration-300 text-gray-300`;
  const mobilelinkClass = () =>
    `text-sm mr-4 transition-all duration-300 text-gray-300`;

  return (
    <footer className="bg-[#201022] py-10">
      <div className="main-container">
        <div className="md:flex md:justify-between md:gap-8">
          <div className="md:flex-1 text-center max-w-sm">
            <div className="mb-3">
              <h1 className="text-5xl px-1 bg-[#201022] rounded-lg">
                Bruno
                <div className="inline-block text-[#180018] ml-1 font-light px-4 rounded-lg bg-gradient-to-r from-[#532959] via-[#824D69] to-[#DFB6B2]">
                  Salazar
                </div>
              </h1>
              <h2 className="text-[15px]">Your Spanish Journey Starts Here</h2>
            </div>
            <p className="text-base md:text-xl mb-3">
            "If you talk to someone in their own language, that goes
            to their heart." - Nelson Mandela
            </p>
          </div>
          <div className="md:flex-1 md:ml-4 ">
            <h2 className="text-2xl mb-2 text-center md:text-start pt-4 md:pt-0">Quick Links</h2>
            {/* desktop  */}
            <div className="hidden sm:flex ">
              <div className="flex-1">
                <div className="mb-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/#aboutt" className={linkClass}>
                    About
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/blogs" className={linkClass}>
                    Blogs
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/courses" className={linkClass}>
                    Courses
                  </NavLink>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Resources
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Faq
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="#" className="text-xl mr-4 text-gray-300">
                    Pricing
                  </NavLink>
                </div>
                <div className="mb-2">
                  <NavLink to="/contact" className={linkClass}>
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-center  flex-wrap gap-4 text-center light-txt-color sm:hidden">
              <NavLink to="/" className={mobilelinkClass}>
                Home
              </NavLink>
              <NavLink to="/#aboutt" className={mobilelinkClass}>
                About
              </NavLink>
              <NavLink to="/blogs" className={mobilelinkClass}>
                Blogs
              </NavLink>
              <NavLink to="/courses" className={mobilelinkClass}>
                Courses
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Resources
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Faq
              </NavLink>
              <NavLink to="#" className="text-sm text-gray-300">
                Pricing
              </NavLink>
              <NavLink to="/contact" className={mobilelinkClass}>
                Contact Us
              </NavLink>
            </div>

          </div>
          <div className="md:flex-1 text-center md:text-start pt-4 md:pt-0">
            <p className="md:text-2xl mb-3 mt-3 md:mt-0">Stay connected and keep learning!</p>
            <div className="flex md:gap-0 gap-1 items-center md:items-start md:justify-start justify-center">
              <NavLink to={'https://www.youtube.com/@brunomad12'} target="_blank"><img src="/footer/youtube.png" alt="youtube" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" /></NavLink>
              <NavLink to={'https://www.facebook.com/bruno.salazar.9887/'} target="_blank"><img src="/footer/facebook.png" alt="facebook" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" /></NavLink>
              <NavLink to={'https://www.instagram.com/neverbroken_12/'} target="_blank"><img src="/footer/instagram.png" alt="instagram" className="w-8 h-8 md:w-[50px] md:h-[50px] object-cover me-2" /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
