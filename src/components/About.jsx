import React from "react";
import video1 from '../assets/video/video1.mp4'

const AboutPage = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={video1} // Replace with your video URL
          autoPlay
          loop
          muted
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>

      {/* Content */}
      <div className="max-w-3xl px-4 z-20 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About Us
        </h2>
        <p className="mt-6 text-white text-lg md:text-xl leading-relaxed">
          We are the Quality Club at BIT SINDRI, dedicated to enhancing
          the quality of education, skills, and personal development. Our goal
          is to create a supportive environment that nurtures the academic and
          personal achievements of our members.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
