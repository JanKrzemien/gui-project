import './GoalsSection.css';

export const GoalsSection = ({ goals = [] }) => {
  return (
    <div className="goals-section">
      <h2 className="goals-title">Moje cele</h2>
      <div className="goals-container">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <div className="goal-icon-container">
              <img src={goal.icon} alt="Goal icon" className="goal-icon" />
            </div>
            <p className="goal-text">{goal.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
