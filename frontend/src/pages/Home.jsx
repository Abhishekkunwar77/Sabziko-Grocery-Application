import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLetter from "../components/NewsLetter";
import AppDownload from "../components/AppDownload";
import HomeContactForm from "../components/HomeContactForm";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToContact) {
      const el = document.getElementById("contact");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
      <AppDownload />
      <div id="contact">
        <HomeContactForm />
      </div>
    </div>
  );
};

export default Home;
