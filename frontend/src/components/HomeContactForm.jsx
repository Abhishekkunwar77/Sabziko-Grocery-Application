import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, details } = formData;

    // Basic client-side validation
    if (!name || !email || !phone || !details) {
      toast.error("Please fill in all the fields.");
      return;
    }

    if (details.trim().length < 15) {
      toast.error("Message must be at least 15 characters.");
      return;
    }

    try {
      const res = await axios.post(
        "https://sabziko-backend.onrender.com/api/contact",
        formData
      );
      toast.success(res.data.message || "Message sent!");
      setFormData({ name: "", email: "", phone: "", details: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };
  

  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-xl font-semibold text-primary text-left">
                Let's Connect and Bring Your Ideas to Life!
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-primary-dull sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Got questions? We’ve got answers. Fill the form and we’ll
                respond faster than your delivery arrives.
              </p>

              <ContactInfo
                icon={<FaMapMarkerAlt size={40} />}
                title="Our Location"
                value="Keli Kunj, Tamil Nadu, India"
              />
              <ContactInfo
                icon={<FaPhoneAlt size={40} />}
                title="Phone Number"
                value="+91 98765 43210"
              />
              <ContactInfo
                icon={<FaEnvelope size={40} />}
                title="Email Address"
                value="info@sabziko.com"
              />
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
              <form onSubmit={handleSubmit}>
                <ContactInputBox
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  handleChange={handleChange}
                  required
                />
                <ContactInputBox
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  handleChange={handleChange}
                  required
                />
                <ContactInputBox
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  handleChange={handleChange}
                  required
                />
                <ContactTextArea
                  row="6"
                  name="details"
                  placeholder="Your Message"
                  value={formData.details}
                  handleChange={handleChange}
                  required
                />
                <div>
                  <button
                    type="submit"
                    className="cursor-pointer w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, value }) => (
  <div className="mb-8 flex w-full max-w-[370px]">
    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
      {icon}
    </div>
    <div className="w-full">
      <h4 className="mb-1 text-xl font-bold">
        {title}
      </h4>
      <p className="text-base text-body-color dark:text-dark-6">{value}</p>
    </div>
  </div>
);

const ContactInputBox = ({ type, placeholder, name, value, handleChange }) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
    />
  </div>
);

const ContactTextArea = ({ row, placeholder, name, value, handleChange }) => (
  <div className="mb-6">
    <textarea
      rows={row}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
    />
  </div>
);

export default HomeContactForm;
