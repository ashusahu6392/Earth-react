import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import contactBg from "../assets/Contact-Banner.jpg";

const Contact = () => {
  return  <div>
      <Hero bgImage={contactBg} title="Contact Us" />
      <ContactSection />
      <Footer />
    </div>
};

export default Contact;



