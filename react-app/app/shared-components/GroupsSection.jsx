import React from 'react';
import './GroupsSection.css';

const defaultGroups = [
  {
    name: 'Group-name',
    description: 'Group description',
    lastActive: '2 hours ago',
    imageUrl: 'https://dashboard.codeparrot.ai/api/assets/Z4FhkgIBBLnlud64'
  }
];

export const GroupsSection = ({ groups = defaultGroups }) => {
  return (
    <div className="groups-section">
      <div className="title">
        <h2>Grupy związane z książką</h2>
      </div>
      <div className="groups-list">
        {groups.map((group, index) => (
          <div key={index} className="group-item">
            <div className="group-container">
              <div className="image-container">
                <img src={group.imageUrl} alt="Group icon" className="group-icon" />
              </div>
              <div className="group-info">
                <div className="group-name">{group.name}</div>
                <div className="group-description">{group.description}</div>
              </div>
              <div className="last-active">
                Last active: {group.lastActive}
              </div>
              <button className="join-button">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="separator" />
    </div>
  );
};

