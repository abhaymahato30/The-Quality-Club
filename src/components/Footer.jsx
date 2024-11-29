import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 md:py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Details */}
        <div className="flex flex-col justify-center items-center" >
          <h3 className="text-xl md:text-5xl font-bold mb-4">Contact Us</h3>
          <ul className="flex flex-col justify-center items-center">
            <li className="flex items-center justify-center mb-2">
              <FaMapMarkerAlt className="mr-3 text-blue-500" /> 123, Quality Street, City, Country
            </li>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-3 text-blue-500" /> +1 (123) 456-7890
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-blue-500" /> info@qualityclub.com
            </li>
          </ul>
        </div>

       

        {/* Social Media */}
        <div className="flex flex-col justify-center items-center">
          <h3 className=" text-4xl md:text-5xl font-bold mb-4">Follow Us</h3>
          <p className="mb-4 mx-6">Stay connected through our social platforms:</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-white transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

         {/* Quick Links */}
         <div className="flex flex-col justify-center items-center"> 
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 flex flex-col justify-center items-center">
            <li>
              <a href="#home" className="hover:text-blue-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#activities" className="hover:text-blue-500 transition duration-300">
                Key Activities
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-blue-500 transition duration-300">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2024 Quality Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
