import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE - FORM */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 sm:p-8 shadow-sm"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            ></textarea>

            <button className="px-6 py-3 bg-[#7aa84f] text-white tracking-widest text-sm hover:bg-green-700 transition">
              SEND NOW
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Talk To Us
          </h2>

          <div className="space-y-8">
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-full text-green-700">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <p className="text-green-700 font-medium">
                  ashusahu6392@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-full text-green-700">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">PHONE NUMBER</p>
                <p className="text-green-700 font-medium">
                  +91 6392000833
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 border rounded-full text-green-700">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">ADDRESS</p>
                <p className="text-green-700 font-medium">
                  Rajajipuram, Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social */}
           <div>
  <p className="font-medium mb-3">Follow Us:</p>

  <div className="flex gap-3">
    
    {/* Facebook */}
    <a
      href="https://facebook.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-[#7aa84f] text-white rounded-full hover:bg-green-700 transition"
    >
      f
    </a>

    {/* Twitter */}
    <a
      href="https://twitter.com/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-[#7aa84f] text-white rounded-full hover:bg-green-700 transition"
    >
      t
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/yourprofile"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-[#7aa84f] text-white rounded-full hover:bg-green-700 transition"
    >
      in
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com/yourchannel"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-[#7aa84f] text-white rounded-full hover:bg-green-700 transition"
    >
      ▶
    </a>

  </div>
</div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;