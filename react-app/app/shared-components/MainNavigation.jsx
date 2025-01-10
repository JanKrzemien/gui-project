import React from 'react';
import './MainNavigation.css';

export const MainNavigation = ({ onLogin, onRegister, onSearch }) => {
  return (
    <nav className="main-nav">
      <div className="nav-left-btn-group">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4f" alt="Logo" className="logo" />
        <button className="nav-btn recommendations-btn">Rekomendacje</button>
        <button className="nav-btn community-btn">Społeczność</button>
      </div>

      <div className="nav-middle-group">
        <div className="category-select">
          <div className="select-container">
            <span className="select-value">Wszystkie</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4g" alt="dropdown" className="dropdown-icon" />
          </div>
        </div>

        <div className="searchbar">
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Szukaj książek, autorów i więcej"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
          <button className="search-btn">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4h" alt="Search" className="search-icon" />
          </button>
        </div>
      </div>

      <div className="nav-right-btn-group">
        <button className="auth-btn login-btn" onClick={onLogin}>
          Login
        </button>
        <button className="auth-btn register-btn" onClick={onRegister}>
          Register
        </button>
      </div>
    </nav>
  );
};

MainNavigation.defaultProps = {
  onLogin: () => {},
  onRegister: () => {},
  onSearch: () => {}
};

export default MainNavigation;

