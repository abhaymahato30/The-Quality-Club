import React from "react";
import om from "../assets/images/Team/om.jpg";
import maya from "../assets/images/Team/mayamam.jpg";
import praksah from "../assets/images/Team/prakash.jpg";
import kashif from "../assets/images/Team/kashif.jpg";
import Ghanshyam from "../assets/images/Team/ghanshyam.jpg";

// Advisory committee data
const advisoryCommittee = [
  {
    name: "Prof (Dr.) Ghanshyam",
    role: "Mentor",
    image: Ghanshyam, // Mentor image
  },
  {
    name: "Prof Prakash Kumar",
    role: "Faculty member",
    image: praksah, // Faculty member image
  },
  {
    name: "Dr. Kashif H. Kazmi",
    role: "Faculty member",
    image: kashif, // Faculty member image
  },
  {
    name: "Dr. Maya Rajanarayan Ray",
    role: "Faculty member",
    image: maya, // Faculty member image
  },
  {
    name: "Dr. Om Prakash",
    role: "Faculty member",
    image: om, // Faculty member image
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16 px-4"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="heading-underline text-5xl font-bold mb-8">Advisory Committee</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Mentor at the top center */}
          <div className="col-span-1 lg:col-span-3 flex justify-center">
            <div className="card-with-comet-border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:opacity-90">
              <div className="mb-6 flex justify-center">
                <img
                  src={advisoryCommittee[0].image}
                  alt={advisoryCommittee[0].name}
                  className="w-36 h-36 rounded-full object-cover shadow-xl transition-all duration-300 ease-in-out"
                />
              </div>
              <h3 className="text-2xl font-semibold">{advisoryCommittee[0].name}</h3>
              <p className="text-gray-400">{advisoryCommittee[0].role}</p>
            </div>
          </div>

          {/* Other members in a single row */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-4 gap-6">
            {advisoryCommittee.slice(1).map((member, index) => (
              <div
                key={index}
                className="card-with-comet-border p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:opacity-90"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover shadow-xl transition-all duration-300 ease-in-out"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
