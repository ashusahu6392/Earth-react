import React from "react";
import Hero from "../components/Hero";
import contactBg from "../assets/Contact-Banner.jpg";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import img1 from "../assets/Card_1.png";
import img2 from "../assets/Card_2.png";
import img3 from "../assets/Card_3.png";
import ServiceBlock from "../components/ServiceBlock";

const Services = () => {
  return  <div>
      <Hero bgImage={contactBg} title="our services" />

      <ServiceBlock
        img={img1}
        title="Web Design"
        desc="We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
        reverse={true}
      />

      {/* Second Section (Reversed) */}
      <ServiceBlock
        img={img2}
        title="Graphic Design"
        desc="We specialize in logos, merchandise and more. Anyone can create nice graphics but it’s much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
        reverse={false}
      />

      <ServiceBlock
        img={img3}
        title="Content Writing"
        desc="Want to attract people to your website? You have to have the best content in the world. Our content writers will create award willing content for you. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
        reverse={true}
      />






      <ContactCTA />
      <Footer />
    </div>
};

export default Services;