import React from "react";

const VisionPage = () => {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/quality.png')", // Replace with your image URL
      }}
    >
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Slow Zoom Animation */}
      <div className="absolute inset-0 animate-zoom bg-cover bg-center" style={{
        backgroundImage: "url('/quality.png')" // Same background image
      }}></div>

      {/* Content */}
      <div className="max-w-3xl px-4 z-20 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Vision
        </h2>
        <p className="mt-6 text-white text-lg md:text-xl leading-relaxed">
          Empowering students with the highest quality of education, fostering
          innovation, leadership, and personal growth.
        </p>
      </div>
    </section>
  );
};

export default VisionPage;
