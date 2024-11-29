import React from "react";
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section className="relative bg-black h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        {/* Right Section: Text */}
        <div className="flex flex-col items-start justify-center p-8 md:p-16 bg-black text-white">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">
            Welcome to Quality Club
          </h1>
          <p className="text-lg sm:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Empowering students through skill-building, networking, and
            innovation.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Involved
          </a>
        </div>
        {/* Left Section: Video */}
        <div className="relative h-full bg-black">


     
   

          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay for contrast */}
          <Spline
        scene="https://prod.spline.design/6YcFaJXqkIP0RpPo/scene.splinecode" 
      />
        </div>
      </div>
    </section>
  );
};

export default Hero;
