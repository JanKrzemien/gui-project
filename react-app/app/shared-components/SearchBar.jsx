import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './SearchBar.css';

export const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <div className="searchbar">
      <TextField
        variant="outlined"
        placeholder="Szukaj książek, autorów i więcej"
        value={searchText}
        onChange={handleChange}
        className="search-input"
      />
      <IconButton onClick={handleSearch} className="search-button">
        <SearchIcon />
      </IconButton>
    </div>
  );
};
