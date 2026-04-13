import React from "react";

const InfoSection = ({ img, title, para, reverse }) => {
  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        
        {/* IMAGE */}
        <div>
          <img
            src={img}
            alt={title}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase">
            {title}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {para}
          </p>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;