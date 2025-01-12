import React, { useState } from 'react';
import './MainNavigation.css';
import { ContainedButton, OutlineButton, TextButton } from './Buttons';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export const MainNavigation = ({ onLogin, onRegister, onSearch }) => {
  const [category, setCategory] = useState('Wszystkie');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <nav className="main-nav">
      <div className="nav-left-btn-group">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4f" alt="Logo" className="logo" />
        <TextButton text="Rekomendacje" onClick={() => {}} className="nav-btn" />
        <TextButton text="Społeczność" onClick={() => {}} className="nav-btn" />
      </div>

      <div className="nav-middle-group">
        <FormControl variant="outlined" className="category-select">
          <InputLabel className="category-select-label">Kategoria</InputLabel>
          <Select
            value={category}
            onChange={handleCategoryChange}
            label="Kategoria"
            className="category-select-container"
          >
            <MenuItem value="Wszystkie">Wszystkie</MenuItem>
            <MenuItem value="Książki">Książki</MenuItem>
            <MenuItem value="Autorzy">Autorzy</MenuItem>
            <MenuItem value="Inne">Inne</MenuItem>
          </Select>
        </FormControl>

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
        <ContainedButton text="Logowanie" onClick={onLogin}/>
        <ContainedButton text="Rejestracja" onClick={onRegister}/>
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

