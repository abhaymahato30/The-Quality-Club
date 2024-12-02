import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTasks,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";
import Logo from '../assets/images/Logo/logo3.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900/50 text-white shadow-lg fixed top-0 left-0 w-full z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <h1
        className="text-3xl font-extrabold tracking-wide flex items-center font-sans"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <img src={Logo} alt="The_Quality_Club__logo" className="w-16 h-16" />
        <span className="text-white">
          The Quality Club
        </span>
      </h1>
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center">
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaHome className="mr-2" /> <a href="#home">Home</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaUser className="mr-2" /> <a href="#about">About</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaTasks className="mr-2" /> <a href="#activities">Key Activities</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaUsers className="mr-2" /> <a href="#team">Team</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaEnvelope className="mr-2" /> <a href="#contact">Contact</a>
        </li>
      </ul>
  
      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-blue-600 transition duration-300"
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <ul className="md:hidden flex flex-col space-y-2   p-4 bg-gray-900/50 backdrop-blur-lg shadow-lg">
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaHome className="mr-2" /> <a href="#home">Home</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaUser className="mr-2" /> <a href="#about">About</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaTasks className="mr-2" /> <a href="#activities">Key Activities</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaUsers className="mr-2" /> <a href="#team">Team</a>
        </li>
        <li className="flex items-center text-white text-lg font-medium hover:text-blue-600 transition duration-300">
          <FaEnvelope className="mr-2" /> <a href="#contact">Contact</a>
        </li>
      </ul>
    )}
  </nav>
  
  );
};

export default Navbar;
