import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl mb-8">We'd love to hear from you! Reach out with any questions or inquiries.</p>
        <form className="max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-lg mb-4 text-gray-900"
          />
          <textarea
            placeholder="Your message"
            className="w-full p-3 rounded-lg mb-4 text-gray-900"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
