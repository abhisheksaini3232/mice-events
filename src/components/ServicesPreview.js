import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const services = [
  {
    icon: '🏛️',
    title: 'Exhibitions',
    description: 'Custom-designed exhibition booths and stands that captivate audiences and elevate your brand presence at trade shows.',
    color: '#d4af37',
  },
  {
    icon: '🎪',
    title: 'Events',
    description: 'End-to-end event management for corporate launches, galas, and celebrations that leave lasting impressions.',
    color: '#e8c547',
  },
  {
    icon: '🤝',
    title: 'Meetings & Conferences',
    description: 'Professional conference setups with seamless AV integration, staging, and logistics management.',
    color: '#c49b30',
  },
  {
    icon: '✨',
    title: 'Branding',
    description: 'Strategic brand identity solutions including visual design, brand activations, and experiential marketing.',
    color: '#f0d060',
  },
  {
    icon: '🖨️',
    title: 'Printing',
    description: 'High-quality large format printing, banners, brochures, and marketing collateral for all your event needs.',
    color: '#b8962a',
  },
  {
    icon: '🎨',
    title: 'Design & Fabrication',
    description: 'Bespoke design and fabrication services to bring creative concepts into reality with precision craftsmanship.',
    color: '#dcc14e',
  },
];

const ServicesPreview = () => {
  return (
    <section className="services-preview" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Comprehensive event solutions tailored to make your vision a stunning reality
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ '--accent': service.color }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-line"></div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="view-all-btn">
            View All Services
            <span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
