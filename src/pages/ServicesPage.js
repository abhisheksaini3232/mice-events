import React from "react";
import "./ServicesPage.css";

const servicesData = [
  {
    id: "exhibitions",
    icon: "🏛️",
    title: "Exhibitions",
    tagline: "Stand Out on the Show Floor",
    description:
      "We design and build custom exhibition booths and pavilions that create powerful brand experiences. From concept to execution, our team ensures your presence at trade shows and expos leaves a lasting impression on every visitor.",
    features: [
      "Custom booth design & fabrication",
      "Modular & portable display systems",
      "Interactive technology integration",
      "On-site installation & dismantling",
      "Logistics & project management",
      "Post-event analytics & reporting",
    ],
  },
  {
    id: "events",
    icon: "🎪",
    title: "Event Management",
    tagline: "Creating Moments That Matter",
    description:
      "From intimate corporate gatherings to large-scale public events, we handle every detail with precision. Our experienced event planners bring creativity and operational excellence to deliver flawless experiences.",
    features: [
      "Corporate events & galas",
      "Product launches & activations",
      "Award ceremonies & celebrations",
      "Team building & retreats",
      "Venue selection & management",
      "Entertainment & catering coordination",
    ],
  },
  {
    id: "meetings",
    icon: "🤝",
    title: "Meetings & Conferences",
    tagline: "Where Ideas Come Together",
    description:
      "Professional conference management with seamless AV integration, staging, and logistics. We create engaging environments that inspire collaboration and drive meaningful outcomes.",
    features: [
      "Conference planning & production",
      "Keynote stage design",
      "Audio-visual setup & management",
      "Hybrid & virtual event solutions",
      "Registration & attendee management",
      "Breakout sessions & workshops",
    ],
  },
  {
    id: "branding",
    icon: "✨",
    title: "Branding",
    tagline: "Your Brand, Amplified",
    description:
      "Strategic brand identity solutions that capture your essence and amplify your message. From visual design to experiential activations, we help brands connect with their audience in meaningful ways.",
    features: [
      "Brand identity development",
      "Visual design & guidelines",
      "Brand activation campaigns",
      "Experiential marketing",
      "Digital & social media design",
      "Signage & environmental design",
    ],
  },
  {
    id: "printing",
    icon: "🖨️",
    title: "Printing",
    tagline: "Print That Impresses",
    description:
      "High-quality printing solutions for all your event and marketing needs. From large format displays to premium marketing collateral, we deliver exceptional print products with quick turnaround times.",
    features: [
      "Large format printing & banners",
      "Brochures & marketing materials",
      "Business cards & stationery",
      "Vehicle wraps & signage",
      "Custom packaging & merchandise",
      "Premium finishing options",
    ],
  },
  {
    id: "fabrication",
    icon: "🎨",
    title: "Design & Fabrication",
    tagline: "Bringing Ideas to Life",
    description:
      "Our in-house design and fabrication team transforms creative concepts into stunning physical realities. Using cutting-edge materials and techniques, we build structures and installations that wow audiences.",
    features: [
      "3D design & visualization",
      "Custom fabrication & carpentry",
      "Metal & acrylic work",
      "LED & lighting installations",
      "Props & set design",
      "Themed environment creation",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
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
          <span className="page-tag">What We Offer</span>
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive solutions for exhibitions, events, conferences,
            branding, and beyond
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="services-list-container">
          {servicesData.map((service, index) => (
            <div
              className={`service-block ${index % 2 === 1 ? "service-block-reverse" : ""}`}
              key={service.id}
              id={service.id}
            >
              <div className="service-block-content">
                <div className="service-block-icon">{service.icon}</div>
                <span className="service-block-tagline">{service.tagline}</span>
                <h2 className="service-block-title">{service.title}</h2>
                <p className="service-block-desc">{service.description}</p>
                <ul className="service-block-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-block-visual">
                <div className="service-visual-card">
                  <div className="visual-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="cta-desc">
            Let's discuss your next project and bring your vision to life.
          </p>
          <a href="/about#contact" className="cta-button">
            Start a Conversation
            <span className="cta-btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
