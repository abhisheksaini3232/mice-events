import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Animated background with CSS-only exhibition-themed effects */}
      <div className="hero-bg">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="hero-grid-lines">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`grid-line grid-line-${i + 1}`}></div>
          ))}
        </div>
        <div className="hero-spotlight"></div>
        <div className="hero-spotlight hero-spotlight-2"></div>
        <div className="hero-stage-lights">
          <div className="stage-light stage-light-1"></div>
          <div className="stage-light stage-light-2"></div>
          <div className="stage-light stage-light-3"></div>
        </div>
      </div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Exhibitions • Events • Conferences
        </div>
        <h1 className="hero-title">
          Crafting <span className="highlight">Unforgettable</span>
          <br />
          Event Experiences
        </h1>
        <p className="hero-subtitle">
          From grand exhibitions to intimate corporate meetings, we bring your
          vision to life with precision, creativity, and world-class execution.
        </p>
        <div className="hero-buttons">
          <Link to="/services" className="btn-primary">
            Our Services
            <span className="btn-arrow">→</span>
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Events Delivered</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
