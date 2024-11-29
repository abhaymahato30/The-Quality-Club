import React from "react";

const VisionPage = () => {
  return (
    <div>
      {/* Main Section with 200vh Height */}
      <section
        id="vision-mission"
        className="relative min-h-screen h-[200vh] bg-black text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Video Section (Sticky on Scroll) */}
          <div className=" h-1/2 sticky top-2 z-20">
            <video
              src="/spline2.mp4" // Replace with the actual path of your video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* Vision and Mission Section */}
          <div className="w-full h-[200vh]">
            {/* Vision Section */}
            <div id="vision" className="h-[100vh] flex flex-col justify-center items-center px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Vision</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                Empowering students with the highest quality of education, fostering innovation, leadership, and personal growth.
              </p>
            </div>

            {/* Mission Section */}
            <div id="mission" className="h-[100vh] bg-black flex flex-col justify-center items-center px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
                Our mission is to provide students with opportunities to excel, develop their skills, and become leaders in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
