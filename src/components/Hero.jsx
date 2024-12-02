import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-start bg-black text-white"
    >
      {/* Video Background */}
      <video
        src="/spline.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content on top of the video */}
      <div className="relative z-10 text-left p-8 md:p-16 max-w-lg">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">
          Welcome to The Quality Club
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Empowering students through skill-building, networking, and innovation.
        </p>
        <a
          href="#contact"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default Hero;
