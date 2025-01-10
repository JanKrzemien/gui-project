import './ProfileGroupSection.css';

export const ProfileGroupSection = ({ 
  groups = [],
  title = ""
}) => {
  return (
    <div className="groups-section">
      <h2 className="groups-title">{title}</h2>
      <div className="groups-container">
        {groups.map((group) => (
          <div key={group.id} className="group-card">
            <div 
              className="group-button"
              variant="outlined"
            >
              <div className="group-content">
                <div className="image-container">
                  <img 
                    src={group.image} 
                    alt={group.name}
                    className="group-image"
                  />
                </div>
                <div className="name-container">
                  <p className="group-name">{group.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};