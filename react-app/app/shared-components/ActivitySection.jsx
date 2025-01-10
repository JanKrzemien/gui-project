import './ActivitySection.css';

export const ActivitySection = ({ title }) => {
  return (
    <div className="activity-section">
      <div className="separator-container">
        <div className="line"></div>
      </div>
      <div className="title-container">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};
