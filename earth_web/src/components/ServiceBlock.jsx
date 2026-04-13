import React from "react";

const ServiceBlock = ({ img, title, desc, reverse }) => {
  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-10 md:px-14 lg:px-20 bg-white">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* IMAGE */}
        <div className={`${reverse ? "md:order-2" : ""}`}>
          <img
            src={img}
            alt={title}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div className={`${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            {title}
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            {desc}
          </p>

          {/* Button */}
          <button className="mt-8 px-8 py-3 bg-[#7aa84f] text-white text-sm tracking-widest hover:bg-green-700 transition duration-300">
            EXPLORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceBlock;