    

import React from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/about-1.png';

const AboutUs = () => {
  // Use Intersection Observer for each element you want to animate
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // To trigger the animation only once
    threshold: 0.1,    // 10% of the element should be visible
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
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              ref={imageRef} // Attach the ref to the image element
              className={`w-full transition-all duration-1000 ease-in-out ${
                imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              src={logo}
              alt="Illustration"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2
              ref={headingRef} // Attach the ref to the heading element
              className={`text-2xl text-pink-500 mb-6 transition-all duration-1000 ease-in-out ${
                headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              About Us
            </h2>
            <h3
              className={`text-5xl text-gray-700 mb-4 font-bold transition-all duration-1000 ease-in-out ${
                headingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Get Started Easily With a Personalized Product Tour
            </h3>
            <p
              ref={paragraphRef} // Attach the ref to the paragraph element
              className={`text-gray-500 mb-6 font-semibold transition-all duration-1000 ease-in-out ${
                paragraphInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accusantium, suscipit itaque quae
              rat dicta porro illum, autem, molestias ut animi ab aspernatur dolorem officia nam dolore.
              Voluptatibus aliquam earum labore atque.
            </p>
            <button className="px-8 py-3 font-semibold rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white">
              About More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
