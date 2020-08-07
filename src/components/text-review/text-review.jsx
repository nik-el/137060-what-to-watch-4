import React from "react";

export const TextReview = React.memo(function TextReview() {
  return <div
    className="add-review__text">
    <textarea
      className="add-review__textarea"
      name="review-text"
      id="review-text"
      placeholder="Review text"
    />
  </div>;
});
