import React from 'react';
import Img from '../assets/features-1.png'
import project from '../assets/project_10321163.png'
import client from '../assets/client_5828115.png'
import './about.css' 
import './textleft.css'
const LandingPage = () => {
  return (
    <div id='test' className="min-h-screen bg-white">
      <section className="px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl  text-pink-500 mb-6">Features</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-pulse">
              Push Your Visitors Into <br /> Happy Customers
            </h1>
            <p className="text-gray-600 mb-6 font-semibold  animate-slideInLeft">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.
            </p>
            <div className="flex space-x-10 mb-6">
              <div className="text-center">
              <img src={project} alt="logo" className='size-20 animate-spin ' />
                <div className="text-3xl font-bold text-gray-900">2285</div>
                <div className="text-gray-600 font-semibold">Created Projects</div>
              </div>
              <div className="text-center">
              <img src={client} alt="logo" className='size-20 animate-spin' />
                <div className="text-3xl font-bold text-gray-900">6560</div>
                <div className="text-gray-600 font-semibold" >Happy Clients</div>
              </div>
            </div>
            <button className="px-8 py-3 font-semibold rounded-full border border-pink-500  text-pink-500  hover:bg-pink-600  hover:text-white">
              Read More
            </button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img src={Img} alt="Illustration"  className="animate-bounce-side  "/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
     