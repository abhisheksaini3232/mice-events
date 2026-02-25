import React from "react";
import "./AboutUs.css";

const teamMembers = [
  { name: "Managing Director", role: "Founder & CEO", initials: "MD" },
  { name: "Creative Director", role: "Head of Design", initials: "CD" },
  { name: "Operations Manager", role: "Project Delivery", initials: "OM" },
  { name: "Technical Lead", role: "AV & Technology", initials: "TL" },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    desc: "We pursue the highest standards in every project, no matter the size.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace creative thinking and cutting-edge solutions.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "We build lasting relationships based on trust and collaboration.",
  },
  {
    icon: "⚡",
    title: "Reliability",
    desc: "We deliver on our promises, on time and within budget.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-hero-particles">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`ph-particle ph-particle-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="page-tag">Who We Are</span>
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            A passionate team dedicated to transforming ideas into extraordinary
            event experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-content">
            <span className="about-tag">Our Story</span>
            <h2 className="about-heading">
              A Legacy of Excellence in Event Solutions
            </h2>
            <p className="about-text">
              Founded with a vision to redefine the events industry, MICE Event
              Solutions has grown into a trusted partner for businesses seeking
              exceptional exhibitions, events, and conferences. With over 15
              years of experience, our team combines creative vision with
              operational precision to deliver memorable experiences.
            </p>
            <p className="about-text">
              We believe that every event is an opportunity to create something
              extraordinary. From concept development to on-site execution, we
              handle every detail with meticulous care, ensuring your brand
              message resonates with your audience.
            </p>
            <p className="about-text">
              Our comprehensive services — spanning exhibitions, event
              management, meetings, branding, and printing — provide end-to-end
              solutions that simplify the process while maximizing impact.
            </p>
          </div>
          <div className="about-story-visual">
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <span className="about-stat-num">500+</span>
                <span className="about-stat-label">Events Delivered</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-num">200+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-num">50+</span>
                <span className="about-stat-label">Team Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <div className="section-header">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team-container">
          <div className="section-header">
            <span className="section-tag">Our People</span>
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-desc">
              Experienced professionals dedicated to delivering excellence
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-avatar">{member.initials}</div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact" id="contact">
        <div className="about-contact-container">
          <div className="contact-info">
            <span className="about-tag">Get In Touch</span>
            <h2 className="about-heading">Let's Discuss Your Next Project</h2>
            <p className="about-text">
              Ready to create something extraordinary? We'd love to hear about
              your upcoming event, exhibition, or branding project.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@miceeventsolutions.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+971 XX XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@company.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Service Interested In</label>
                <select className="form-input form-select">
                  <option value="">Select a service</option>
                  <option value="exhibitions">Exhibitions</option>
                  <option value="events">Event Management</option>
                  <option value="conferences">Meetings & Conferences</option>
                  <option value="branding">Branding</option>
                  <option value="printing">Printing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Send Message
                <span className="submit-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
