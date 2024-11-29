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

          {/* Vision and Mission Section */}
          <div className="w-full h-[200vh]">
            {/* Vision Section */}
            <div
              id="vision"
              className="h-1/5 md:h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center"
            >
              <h2 className="heading-underline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto">
                Empowering students with the highest quality of education,
                fostering innovation, leadership, and personal growth.
              </p>
            </div>

            {/* Mission Section */}
            <div
              id="mission"
              className="h-1/5 md:h-[100vh] bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 text-center"
            >
              <h2 className="heading-underline text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg mx-auto">
                Our mission is to provide students with opportunities to excel,
                develop their skills, and become leaders in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
