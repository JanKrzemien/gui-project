import React from 'react';
import './AboutMeSection.css';

export const AboutMeSection = ({ title = "O mnie"}) => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <h2 className="about-me-title">{title}</h2>
      </div>
      <div className="about-me-content">
        {/* Content can be added here */}
      </div>
    </div>
  );
};
