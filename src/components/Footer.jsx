import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
// import logo from "../../assets/images/logo1.png"; // Ensure the path to logo is correct

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-lg p-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo Section */}
        {/* <div className="flex justify-center sm:justify-start">
          {/* <img src={logo} alt="Logo" className="w-24 h-24" /> 
        </div> */}

        {/* Description Section */}
        <div>
          <p className="text-lg mt-4 sm:mt-0">
            The Association of Civil Engineers, B.I.T. Sindri, established in 2017, is an organization focused on introducing the latest trends in the Civil Engineering field.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#team" className="hover:text-blue-400">Team</a></li>
            <li><a href="#faculty" className="hover:text-blue-400">Faculty</a></li>
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                <FaLinkedinIn size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 BIT Sindri. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
