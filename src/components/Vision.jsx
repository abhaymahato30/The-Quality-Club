import React from "react";

const VisionPage = () => {
  return (
    <div>
      {/* Main Section with 200vh Height */}
      <section
        id="vision-mission"
        className="relative min-h-screen h-[120vh] md:h-[200vh] bg-black text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Video Section (Sticky on Scroll) */}
          <div className="h-1/2 lg:sticky lg:top-2 z-20">
            <video
              src="/spline2.mp4" // Replace with the actual path of your video
              className="w-full h-56 sm:h-64 md:h-80 lg:h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* Vision and Core Values Section */}
          <div className="w-full h-[200vh]">
            {/* Vision Section */}
            <div
              id="vision"
              className="h-1/5 md:h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center"
            >
              <h2 className="heading-underline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto mb-4">
                At the heart of our institution lies the firm belief that every student has the potential to excel. 
                Our vision is to foster an environment that nurtures intellectual curiosity, creativity, and critical thinking, 
                empowering students to become visionary leaders and change-makers.
              </p>
              
            </div>

            {/* Core Values Section */}
            <div
              id="core-values"
              className="h-1/5 md:h-[100vh] bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center"
            >
              <h2 className="heading-underline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
                Our Core Values
              </h2>
              <ul className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto space-y-4">
                <li>Integrity: Upholding the highest standards of honesty and ethical behavior.</li>
                <li>Innovation: Encouraging creativity and continuous improvement.</li>
                <li>Collaboration: Fostering teamwork and mutual respect.</li>
                <li>Excellence: Striving for the best in all our endeavors.</li>
                <li>Inclusivity: Promoting diversity and equality in all aspects.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
