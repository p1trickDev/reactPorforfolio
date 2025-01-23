// import React from "react";
import "./Hero.css";
import withGlasses from "../assets/with-glasses.webp";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={withGlasses} alt="With Glasses" className="hero-image" />
        <h1 className="hero-title">Fitzpatrick Managuit (p1trickDev)</h1>
        <p className="hero-subtitle">
          Full Stack Developer
          <br />
          Zamboanga City | Philippines
        </p>
      </div>
    </section>
  );
}; 

export default Hero;
