import React, { useState } from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Global",
    text: "MICE Event Solutions transformed our annual trade show presence. Their attention to detail and creative booth design exceeded all expectations. We saw a 40% increase in booth traffic!",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "CEO",
    company: "Gulf Enterprises",
    text: "Outstanding professionalism from start to finish. They managed our corporate gala seamlessly — every element was perfectly executed. Truly world-class event management.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Chen",
    role: "Event Manager",
    company: "Innovation Labs",
    text: "Their conference setup was impeccable. From stage design to AV integration, everything ran flawlessly. Our speakers and attendees were thoroughly impressed.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Okonkwo",
    role: "Brand Manager",
    company: "Atlas Industries",
    text: "The branding and print materials they produced were stunning. High quality, delivered on time, and the design perfectly captured our brand essence. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Nexus Solutions",
    text: "We have worked with MICE Event Solutions on multiple exhibitions and every single time they deliver excellence. Their team is responsive, creative, and incredibly reliable.",
    rating: 5,
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews" id="reviews">
      <div className="reviews-container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Client Reviews</h2>
          <p className="section-desc">
            Don't just take our word for it — hear from our valued clients
          </p>
        </div>

        <div className="reviews-carousel">
          <button
            className="review-nav review-prev"
            onClick={prevReview}
            aria-label="Previous review"
          >
            ←
          </button>

          <div className="review-card-wrapper">
            {reviews.map((review, index) => (
              <div
                className={`review-card ${index === activeIndex ? "review-active" : ""}`}
                key={review.id}
              >
                <div className="review-quote">"</div>
                <p className="review-text">{review.text}</p>
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <div className="review-author">
                  <div className="review-avatar">{review.name.charAt(0)}</div>
                  <div className="review-info">
                    <span className="review-name">{review.name}</span>
                    <span className="review-role">
                      {review.role}, {review.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="review-nav review-next"
            onClick={nextReview}
            aria-label="Next review"
          >
            →
          </button>
        </div>

        <div className="review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`review-dot ${index === activeIndex ? "dot-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to review ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
