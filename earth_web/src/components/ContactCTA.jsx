import React from "react";
import bg from "../assets/Call-to-action.jpg"; // use your mountain image

const ContactCTA = () => {
  return (
    <section
      className="relative min-h-[80vh] py-24 px-4 text-center bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      

      {/* Content */}
      <div className="relative max-w-2xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2c541d] tracking-widest uppercase">
          Talk to us
        </h2>

        {/* Paragraph */}
        <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          Have any questions? We are always open to talk about your business,
          <br className="hidden sm:block" />
          new projects, creative opportunities and how we can help you.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-[#2c541d] text-white text-sm tracking-widest hover:bg-green-800 transition duration-300">
            GET IN TOUCH
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
