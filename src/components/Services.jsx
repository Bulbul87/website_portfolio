
import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook

const ServiceSection = () => {
  const services = [
    {
      title: 'Email Newsletters',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '📧', // Placeholder icon
    },
    {
      title: 'Acquisition Emails',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '👍', // Placeholder icon
    },
    {
      title: 'Retention Emails',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '🚇', // Placeholder icon
    },
    {
      title: 'Promotional Emails',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit',
      icon: '📊', // Placeholder icon
    },
  ];

  return (
    <div  id="service"className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl text-pink-500 mb-6">Our Services</h3>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-pulse">What We Can Do For You</h2>
        <p className="text-gray-600 mb-12 font-semibold animate-slideInRight">
          Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for each service card
const ServiceCard = ({ service }) => {
  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  return (
    <div
      ref={ref} // Attach ref to the element we want to observe
      className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
        inView ? 'animate-slideInRight opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <button className="px-4 py-2 font-semibold border border-pink-500 text-pink-500 rounded-full hover:bg-pink-600 hover:text-white">
        Read More
      </button>
    </div>
  );
};

export default ServiceSection;
