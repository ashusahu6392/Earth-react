import React from "react";
import img1 from "../assets/Card_1.png";
import img2 from "../assets/Card_2.png";
import img3 from "../assets/Card_3.png";

const ServicesHome = () => {
  const data = [
    {
      img: img1,
      title: "Web Design",
      desc: "Custom web design for small businesses, we help you capture new audiences and increase your sales.",
    },
    {
      img: img2,
      title: "Graphic Design",
      desc: "Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.",
    },
    {
      img: img3,
      title: "Content Creation",
      desc: "Want to attract people to your website? You have to have the best content in the world. That’s what we do.",
    },
  ];

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      
      {/* Center container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {data.map((item, index) => (
            <div key={index} className="text-left group">
              
              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] sm:h-100 md:h-100 object-cover "
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg sm:text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ServicesHome;