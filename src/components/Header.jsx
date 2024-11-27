


import React from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/hero-img-1.png';
import Mailicon from '../assets/pinkicon.png';
import './about.css';
import './textleft.css';

const HomePage = () => {

    const { ref: headingRef, inView: headingInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, 
    });

    const { ref: paragraphRef, inView: paragraphInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div >
<header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
    <div className="container mx-auto flex items-center p-4">
        <img src={Mailicon} alt="logo" className="size-12" />
        <div className="text-2xl font-bold text-pink-500 p-2">Mailler</div>

        <nav className="flex space-x-4 ml-72 mr-0">
            <a href="#" className="text-gray-600 text-xl font-semibold hover:text-pink-500 p-2">Home</a>
            <a href="#about" className="text-gray-600 text-xl font-semibold hover:text-pink-500 p-2">About</a>
            <a href="#service" className="text-gray-600 text-xl font-semibold hover:text-pink-500 p-2">Services</a>
            <div className="relative group">
                <button className="text-gray-600 text-xl font-semibold hover:text-pink-500 p-2">Pages</button>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                    <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white">Page 1</a>
                    <a href="#test" className="block px-4 py-2 text-gray-700 hover:bg-pink-500 hover:text-white">Page 2</a>
                </div>
            </div>
            <a href="#contact" className="text-gray-600 text-xl font-semibold hover:text-pink-500 p-2">Contact Us</a>
        </nav>
        <div className="flex space-x-4">
            <a href="#" className="px-4 py-2 font-semibold border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white">Log In</a>
            <a href="#" className="px-4 py-2 font-semibold border border-pink-500 text-pink-500 rounded-full hover:bg-pink-600 hover:text-white">Sign Up</a>
        </div>
    </div>
</header>

            <section className="hero-section text-center py-20 bg-gray-50">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
                    <div className="md:w-1/2 text-left p-4">
                        {/* Heading animation using Intersection Observer */}
                        <h1
                            ref={headingRef} // Attach ref to the heading
                            className={`text-6xl md:text-5xl font-bold mb-4 text-gray-600 transition-all duration-1000 ease-in-out ${
                                headingInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        >
                            Turn Emails into Revenue
                        </h1>
                        {/* Paragraph animation using Intersection Observer */}
                        <p
                            ref={paragraphRef} // Attach ref to the paragraph
                            className={`text-gray-500 font-semibold mb-8 transition-all duration-1000 ease-in-out ${
                                paragraphInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        >
                            Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.
                        </p>
                        <a href="#" className="px-8 py-3 border font-semibold border-pink-500 text-pink-500 rounded-full hover:bg-pink-600 hover:text-white">Get Started</a>
                    </div>
                    <div className="md:w-1/2 p-4">
                        {/* Image animation using Intersection Observer */}
                        <img
                            ref={imageRef} // Attach ref to the image
                            src={logo}
                            alt="Marketing Illustration"
                            className={`w-full transition-all duration-1000 ease-in-out ${
                                imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;


