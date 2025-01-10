import React, { useState } from 'react';
import './ReviewSection.css';

export const ReviewSection = ({ 
  onSubmit, 
  onCancel, 
  initialRating = 0, 
  initialText = '' 
}) => {
  const [rating, setRating] = useState(initialRating);
  const [reviewText, setReviewText] = useState(initialText);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ text: reviewText, rating });
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="review-section">
      <h2 className="review-title">Recenzje</h2>
      
      <div className="rating-section">
        <label className="rating-label">Ocena:</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              src={star <= rating ? "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud65" : "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud66"}
              alt={`Star ${star}`}
              onClick={() => setRating(star)}
              className="star-icon"
            />
          ))}
        </div>
      </div>

      <div className="review-input-section">
        <label className="text-label">Tekst recenzji</label>
        <div className="textarea-container">
          <textarea
            className="review-textarea"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Tekst..."
          />
          <label className="floating-label">Tekst</label>
        </div>
      </div>

      <div className="button-container">
        <button className="cancel-button" onClick={handleCancel}>
          Anuluj
        </button>
        <button className="submit-button" onClick={handleSubmit}>
          Opublikuj
        </button>
      </div>
    </div>
  );
};

ReviewSection.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {},
  initialRating: 0,
  initialText: ''
};
