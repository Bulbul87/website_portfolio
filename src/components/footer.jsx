import React from "react";
import { useInView } from "react-intersection-observer";
import locationicon from "../assets/locationicon.jpg";
import mail from "../assets/mailicon4.jpg";
import phoneicon from "../assets/phone.jpg";
import instaicon from "../assets/insta.svg";
import facebook from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/yt.svg";

import "./footers.css";

const Footer = () => {
  // Intersection observer hooks for each section
  const { ref: companyRef, inView: companyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: quickLinksRef, inView: quickLinksInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: contactInfoRef, inView: contactInfoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: bottomRef, inView: bottomInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer id="contact" className="bg-gray-100 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Section */}
        <div
          ref={companyRef}
          className={`transition-all duration-1000 ease-in-out ${
            companyInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Why Mailler?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Our Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Our Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Our Blog & News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Get In Touch
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div
          ref={quickLinksRef}
          className={`transition-all duration-1000 ease-in-out ${
            quickLinksInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Our Blog & News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div
          ref={servicesRef}
          className={`transition-all duration-1000 ease-in-out ${
            servicesInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                All Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Promotional Emails
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Product Updates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Email Marketing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Acquisition Emails
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 font-semibold"
              >
                Retention Emails
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div
          ref={contactInfoRef}
          className={`transition-all duration-1000 ease-in-out ${
            contactInfoInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul>
            <li className="text-gray-600 font-semibold flex m-2 hover:text-pink-500">
              <img src={locationicon} alt="" className="size-6" /> 123 Street,
              New York, USA
            </li>
            <li className="text-gray-600 font-semibold flex m-2 hover:text-pink-500">
              <img src={mail} alt="" className="size-6" /> info@example.com
            </li>
            <li className="text-gray-600 font-semibold flex m-2 hover:text-pink-500">
              <img src={phoneicon} alt="" className="size-6" /> +012 345 67890
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-pink-600">
              <img
                src={instaicon}
                alt=""
                className="size-8 hover:bg-pink-500 rounded"
              />
            </a>
            <a href="#" className="text-pink-600">
              <img
                src={facebook}
                alt=""
                className="size-8 hover:bg-pink-500 rounded"
              />
            </a>
            <a href="#" className="text-pink-600">
              <img
                src={twitter}
                alt=""
                className="size-9 hover:bg-pink-500 rounded"
              />
            </a>
            <a href="#" className="text-pink-600">
              <img
                src={youtube}
                alt=""
                className="size-9 hover:bg-pink-500 rounded"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={`bg-slate-600 content-center mt-10 p-2 text-gray-600 font-semibold flex items-center transition-all duration-1000 ease-in-out ${
          bottomInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white">© Your Site Name, All right reserved.</p>
        <p className="text-white">
          Designed by{" "}
          <a href="https://htmlcodex.com" className="text-pink-600 underline">
            HTML Codex
          </a>
        </p>
        <p className="text-white">
          Distributed by{" "}
          <a href="https://themewagon.com" className="text-pink-600 underline">
            ThemeWagon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
