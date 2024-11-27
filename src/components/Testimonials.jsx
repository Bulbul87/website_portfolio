import React from "react";
import Img from "../assets/features-1.png";
import project from "../assets/project_10321163.png";
import client from "../assets/client_5828115.png";

const LandingPage = () => {
  return (
    <div id="test" className=" container mx-auto bg-white">
      <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl lg:text-2xl text-pink-500 mb-4 sm:mb-6">
              Features
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-pulse">
              Push Your Visitors Into <br /> Happy Customers
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 font-medium animate-slideInLeft max-w-prose mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium, suscipit itaque quaerat dicta porro illum, autem,
              molestias ut animi ab aspernatur dolorum officia nam dolore.
              Voluptatibus aliquam earum labore atque.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
              <div className="text-center">
                <img
                  src={project}
                  alt="logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-spin mx-auto"
                />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  2285
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Created Projects
                </div>
              </div>
              <div className="text-center">
                <img
                  src={client}
                  alt="logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-spin mx-auto"
                />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  6560
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Happy Clients
                </div>
              </div>
            </div>
            <button className="px-6 py-2 sm:px-8 sm:py-3 font-medium rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white">
              Read More
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <img
              src={Img}
              alt="Illustration"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto animate-bounce-side"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
