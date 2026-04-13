import React from "react";

const Hero = ({ bgImage, title }) => {
  return (
    <section
      className="relative h-[90vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c541d] tracking-widest uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Hero;