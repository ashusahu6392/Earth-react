import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import contactBg from "../assets/Contact-Banner.jpg";
import missionImg from "../assets/OUR.jpg";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const About = () => {
  return  <div>
      <Hero bgImage={contactBg} title="who are we ?" />

      <InfoSection
        img={missionImg}
        title="Our Mission"
        para={`Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials.

Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.

I wish you the best of luck with your business, enjoy the adventure.`}
      />

      <ContactCTA />
      <Footer />
    </div>
};

export default About;
