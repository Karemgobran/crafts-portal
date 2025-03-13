import React from "react";
import "./Reviews.css";
const Reviews = () => {
  const reviews = Array(6).fill({ name: "Mohamed", rating: "★★★★★" });

  return (
    <section className="reviews">
      <div className="review-title">
        <h2>See what happy customers are saying about our services</h2>
      </div>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="rectangle">
              {review.name} <br /> {review.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
