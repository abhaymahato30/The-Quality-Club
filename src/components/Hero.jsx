import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-black h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        {/* Left Section: Video */}
        <div className="relative h-full w-full order-1 md:order-2 flex justify-center items-center">
          {/* Video Element */}
          <video
            src="/spline1.mp4"
            className="w-full h-64 mt-10 md:h-3/4 md:w-3/4 object-cover"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          {/* Overlay for Contrast */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Right Section: Text */}
        <div className="flex flex-col items-start justify-center p-8 md:p-16 bg-black text-white order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">
            Welcome to Quality Club
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Empowering students through skill-building, networking, and
            innovation.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
