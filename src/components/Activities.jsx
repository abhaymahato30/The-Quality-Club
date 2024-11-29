import React from "react";
// Importing icons from react-icons
import { FaTools, FaCogs, FaRegHandshake, FaFileAlt, FaChartLine, FaClipboardList } from "react-icons/fa";

const activities = [
  {
    title: "Quality Circles for Continuous Improvement",
    description:
      "Organizing quality circles to address specific issues and promote team-based problem solving using Kaizen boards to drive continuous improvement initiatives.",
    icon: <FaCogs size={40} className="text-gray-200" />, // Icon for Quality Circles
  },
  {
    title: "Guest Lectures and Training",
    description:
      "Hosting industry experts to share insights and best practices.",
    icon: <FaRegHandshake size={40} className="text-gray-200" />, // Icon for Guest Lectures
  },
  {
    title: "Safety and Quality Audits",
    description:
      "Conducting regular audits to ensure safety and quality standards are met in the colleges.",
    icon: <FaClipboardList size={40} className="text-gray-200" />, // Icon for Audits
  },
  {
    title: "Checklist Preparation",
    description:
      "Ensuring consistency, preventing errors, and enhancing accountability in processes in colleges.",
    icon: <FaFileAlt size={40} className="text-gray-200" />, // Icon for Checklist Preparation
  },
  {
    title: "Quality Tools and Techniques",
    description:
      "Training on essential tools, including Pareto Chart, Control Chart, Fishbone Diagram (Ishikawa), Why Why Analysis, and Abnormality Analysis.",
    icon: <FaTools size={40} className="text-gray-200" />, // Icon for Quality Tools
  },
  {
    title: "Process SOPs and Process Audits",
    description:
      "Documenting Standard Operating Procedures (SOPs) for key processes and performing audits to ensure compliance.",
    icon: <FaChartLine size={40} className="text-gray-200" />, // Icon for SOPs and Audits
  },
  {
    title: "Calibration and Equipment Maintenance",
    description:
      "Ensuring accurate measurements through regular calibration of equipment.",
    icon: <FaTools size={40} className="text-gray-200" />, // Icon for Calibration and Equipment
  },
  {
    title: "Curriculum on Quality Concepts",
    description:
      "Designing and delivering electives and courses for students as part of the curriculum.",
    icon: <FaFileAlt size={40} className="text-gray-200" />, // Icon for Curriculum
  },
  {
    title: "Six Sigma and Lean Manufacturing",
    description:
      "Proposals to take forward Six Sigma and Lean Manufacturing techniques.",
    icon: <FaCogs size={40} className="text-gray-200" />, // Icon for Six Sigma and Lean Manufacturing
  },
  {
    title: "Balanced Scorecard",
    description:
      "Implementing and tracking organizational performance using the Balanced Scorecard approach.",
    icon: <FaChartLine size={40} className="text-gray-200" />, // Icon for Balanced Scorecard
  },
  {
    title: "Total Quality Management (TQM) Pillars",
    description:
      "Focusing on the core pillars of Total Quality Management to improve quality across the institute.",
    icon: <FaTools size={40} className="text-gray-200" />, // Icon for TQM Pillars
  },
];

const KeyActivities = () => {
  return (
    <section
      id="activities"
      className="py-16 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-center text-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Key Activities and Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out transform hover:opacity-90"
              data-aos="fade-up"
            >
              {/* Icon section */}
              <div className="mb-6 flex justify-center">
                {activity.icon}
              </div>
              {/* Title and description */}
              <h3 className="text-2xl font-semibold">{activity.title}</h3>
              <p className="text-gray-400 mt-4">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyActivities;
