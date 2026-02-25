import React, { useRef } from 'react';
import './Portfolio.css';

/* 
  Portfolio images are loaded from public/images/portfolio/
  Add your images there and update this array accordingly.
  Using placeholder gradients until real images are added.
*/
const portfolioItems = [
  { id: 1, title: 'Exhibition Booth Design', category: 'Exhibition', image: '/images/portfolio/placeholder-1.jpg' },
  { id: 2, title: 'Corporate Gala Night', category: 'Event', image: '/images/portfolio/placeholder-2.jpg' },
  { id: 3, title: 'Trade Show Setup', category: 'Exhibition', image: '/images/portfolio/placeholder-3.jpg' },
  { id: 4, title: 'Product Launch Event', category: 'Event', image: '/images/portfolio/placeholder-4.jpg' },
  { id: 5, title: 'Conference Stage Design', category: 'Conference', image: '/images/portfolio/placeholder-5.jpg' },
  { id: 6, title: 'Brand Activation', category: 'Branding', image: '/images/portfolio/placeholder-6.jpg' },
  { id: 7, title: 'Annual Summit Setup', category: 'Conference', image: '/images/portfolio/placeholder-7.jpg' },
  { id: 8, title: 'Award Ceremony', category: 'Event', image: '/images/portfolio/placeholder-8.jpg' },
];

const placeholderGradients = [
  'linear-gradient(135deg, #1a1a3e 0%, #2d1f4e 50%, #d4af37 100%)',
  'linear-gradient(135deg, #0d0d24 0%, #1a3a5c 50%, #d4af37 100%)',
  'linear-gradient(135deg, #2d1f4e 0%, #0d0d24 50%, #b8962a 100%)',
  'linear-gradient(135deg, #1a3a5c 0%, #0d0d24 50%, #f0d060 100%)',
  'linear-gradient(135deg, #0d0d24 0%, #2d1f4e 50%, #c49b30 100%)',
  'linear-gradient(135deg, #1a1a3e 0%, #1a3a5c 50%, #e8c547 100%)',
  'linear-gradient(135deg, #2d1f4e 0%, #1a1a3e 50%, #d4af37 100%)',
  'linear-gradient(135deg, #1a3a5c 0%, #2d1f4e 50%, #dcc14e 100%)',
];

const Portfolio = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-header-text">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">Portfolio</h2>
            <p className="section-desc">
              A showcase of our finest exhibitions, events, and creative projects
            </p>
          </div>
          <div className="portfolio-nav">
            <button className="portfolio-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              ←
            </button>
            <button className="portfolio-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              →
            </button>
          </div>
        </div>

        <div className="portfolio-scroll" ref={scrollRef}>
          {portfolioItems.map((item, index) => (
            <div className="portfolio-card" key={item.id}>
              <div
                className="portfolio-image"
                style={{
                  backgroundImage: `url(${item.image}), ${placeholderGradients[index % placeholderGradients.length]}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-scroll-hint">
          <span>← Drag or use arrows to explore →</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
