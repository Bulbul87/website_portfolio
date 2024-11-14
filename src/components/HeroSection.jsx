
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook
import './textleft.css';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Email Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '✉️', // Placeholder for email icon
    },
    {
      title: 'Email Builder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '📧', // Placeholder for email builder icon
    },
    {
      title: 'Customer Builder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '🏗️', // Placeholder for customer builder icon
    },
    {
      title: 'Campaign Manager',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '✅', // Placeholder for campaign manager icon
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl text-pink-500 mb-6">Our Feature</h3>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-pulse">Important Features For Email Marketing</h2>
        <p className="text-gray-600 mb-12 font-semibold">
          Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        <div className="mt-12">
          <button className="px-8 py-3 font-semibold rounded-full border border-pink-500 text-pink-500 hover:bg-pink-600 hover:text-white">
            More Features
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for each feature card
const FeatureCard = ({ feature }) => {
  // Using the useInView hook to detect when the feature card is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when the card enters the viewport
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  return (
    <div
      ref={ref} // Attach ref to the element we want to observe
      className={`p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ${
        inView ? 'animate-slideInLeft opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold mb-2 flex justify-center">
        {feature.title}
        <span className="ml-2">→</span> {/* Arrow icon next to the title */}
      </h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
    </div>
  );
};

export default FeaturesSection;
