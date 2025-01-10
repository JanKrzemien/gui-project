import React from 'react';
import './UserProfile.css';

export const UserProfile = ({ avatarUrl = 'https://dashboard.codeparrot.ai/api/assets/Z4FIU8s5D--WlqJD', username = '@Jano_paplo_2' }) => {
  return (
    <div className="user-profile">
      <div className="avatar-container">
        <img src={avatarUrl} alt="User avatar" className="avatar" />
      </div>
      <div className="username-container">
        <span className="username">{username}</span>
      </div>
    </div>
  );
};
