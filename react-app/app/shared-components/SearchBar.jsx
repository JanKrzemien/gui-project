import React from 'react';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconOutlineButton } from './Buttons';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="searchbar">
      <TextField
        variant="outlined"
        placeholder="Szukaj książek, autorów i więcej"
        onChange={handleSearch}
        className="search-input"
      />
      <IconOutlineButton
        onClick={() => onSearch?.(document.querySelector('.search-input').value)}
        className="search-button"
      >
        <SearchOutlinedIcon />
      </IconOutlineButton>
    </div>
  );
};
