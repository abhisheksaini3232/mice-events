import React from "react";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import Reviews from "../components/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ServicesPreview />
      <Portfolio />
      <Clients />
      <Reviews />
    </div>
  );
};

export default Home;
