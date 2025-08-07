import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";

import mission from "../assets/mission.png";

import aboutprofile1 from "../assets/aboutprofile1.png";
import aboutprofile2 from "../assets/aboutprofile2.png";
import aboutprofile3 from "../assets/aboutprofile3.png";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Sabziko - About";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleReadMore = (blogSlug) => {
    window.open(`/blog/${blogSlug}`, "_blank");
  };

  return (
    <div className="ab-about-container">
      <header className="ab-about-header">
        <h1 className="ab-header-title">
          Sabziko – Groceries at Your Fingertips
        </h1>
        <p className="ab-header-subtitle">
          Fresh. Fast. Fuss-free. From farm to fridge without leaving home.
          <br />
          Skip the lines. Shop from home.
        </p>
      </header>

      <section className="ab-why-choose-section">
        <h2 className="ab-section-title">Why Choose Sabziko?</h2>
        <div className="ab-why-choose-grid">
          <div className="ab-why-choose-item  border border-primary-dull">
            <img
              src={why1}
              alt="Wide Variety Icon"
              className="ab-why-choose-image "
            />
            <h3>Easy Ordering</h3>
            <p>Browse, tap, checkout. That’s it. No calls. No confusion.</p>
          </div>
          <div className="ab-why-choose-item border border-primary-dull">
            <img
              src={why2}
              alt="Fast Delivery Icon"
              className="ab-why-choose-image"
            />
            <h3>Fast Delivery</h3>
            <p>Get groceries to your door in minutes. No delays. No drama.</p>
          </div>
          <div className="ab-why-choose-item border border-primary-dull">
            <img
              src={why3}
              alt="Quality Guaranteed Icon"
              className="ab-why-choose-image"
            />
            <h3>Freshness Guaranteed</h3>
            <p>
              We partner with trusted suppliers for peak-season produce and
              quality brands.
            </p>
          </div>
        </div>
      </section>

      <section className="ab-mission-section">
        <div className="ab-mission-content">
          <div className="ab-mission-image">
            <img
              src={mission}
              alt="Our Mission"
              className="ab-mission-image-content"
            />
          </div>
          <div className="ab-mission-text">
            <h2 className="ab-section-title">Our Mission</h2>
            <p className="ab-section-text">
              At Sabziko, we believe groceries are more than just daily
              essentials, they're the ingredients of life. Our mission is to
              bring fresh produce, pantry staples, and everyday goods right to
              your doorstep, making shopping seamless, reliable, and joyful.
              We’re passionate about connecting homes with quality ingredients
              sourced from trusted farmers and suppliers, ensuring that every
              bag we deliver is packed with care and authenticity. Whether
              you're restocking your kitchen, prepping for a family feast, or
              just craving midnight snacks, we strive to make every order a
              smooth, satisfying experience. Our team works tirelessly to
              simplify your routine-partnering with the best local vendors,
              streamlining logistics, and ensuring freshness in every delivery.
              Join us as we transform the way you shop, one basket at a
              time-bringing convenience, comfort, and community back into the
              heart of your home.
            </p>
          </div>
        </div>
      </section>

    

      <section className="ab-testimonial-section">
        <h2 className="ab-testimonial-title">What Our Customers Say</h2>
        <div className="ab-testimonial-grid">
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile1}
              alt="User 1 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Arjun A.</h3>
              <div className="ab-testimonial-rating text-primary-dull">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="ab-testimonial-text">
                Sabziko never fails me. Groceries are delivered on time, packed
                well, and super fresh. I’ve even started exploring new
                ingredients thanks to their clean layout and variety.
              </p>
            </div>
          </div>
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile2}
              alt="User 2 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Krishna R.</h3>
              <div className="ab-testimonial-rating text-primary-dull">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆</span>
              </div>
              <p className="ab-testimonial-text">
                I love how smooth the whole experience is from adding items to
                tracking delivery. The produce is always fresh, and the support
                team actually listens. Keep it up!
              </p>
            </div>
          </div>
          <div className="ab-testimonial-card">
            <img
              src={aboutprofile3}
              alt="User 3 Profile"
              className="ab-testimonial-profile-pic"
            />
            <div className="ab-testimonial-content">
              <h3 className="ab-testimonial-name">Keshavi K</h3>
              <div className="ab-testimonial-rating text-primary-dull">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="ab-testimonial-text">
                Sabziko has completely changed the way I shop! I no longer waste
                time at crowded stores everything I need just arrives at my
                doorstep, fresh and fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ab-get-in-touch-section">
        <h2 className="ab-get-in-touch-title">GET IN TOUCH WITH US</h2>
        <div className="ab-get-in-touch-content">
          <div className="ab-contact-info">
            <h3>Head Office:</h3>
            <p>
              Sabziko
              <br />
              No. 555, 23rd Block, Sabziko Tech Park
              <br />
              Outer Ring Road, Coimbatore - 641202
            </p>
            <h3>For Help & Support:</h3>
            <p>
              Email: <a href="mailto:support@sabziko.in">support@sabziko.in</a>
            </p>
          </div>
          <div className="ab-map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226820.71397643728!2d76.802422260794!3d11.013924447326762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1746146004733!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
