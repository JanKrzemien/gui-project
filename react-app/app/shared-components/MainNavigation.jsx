import React, { useState } from 'react';
import './MainNavigation.css';
import { ContainedButton, OutlineButton, TextButton } from './Buttons';
import { OutlinedInput } from './Inputs'
import { Select, MenuItem, FormControl, InputLabel, Avatar } from '@mui/material';
import { useNavigate } from "react-router";
import { useLocalStorage } from '@uidotdev/usehooks'
import 'material-icons/iconfont/material-icons.css'

export const MainNavigation = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useLocalStorage('userData', undefined)

  console.log(userData)

  const [category, setCategory] = useState('Wszystkie');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <nav className="main-nav">
      <div className="nav-left-btn-group">
        <a onClick={() => navigate('/')} className='logo-container'><img src="/book.png" alt="Logo" className="logo" /></a>
        <TextButton text="Rekomendacje" onClick={() => navigate('/recommend')} className="nav-btn" />
        <TextButton text="Społeczność" onClick={() => navigate('/groups')} className="nav-btn" />
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
              <OutlinedInput label="Szukaj książek, autorów i więcej" onChange={(e) => console.log(e.target.value)}/>
          </div>
          <OutlineButton className="search-btn" text={<span className="material-icons">search</span>} />
        </div>
      </div>


      {
        userData ? (
          <div className="nav-right-btn-group">
            <Avatar onClick={() => {navigate('/user/' + userData.user.user.user_id)}}>{userData.user.user.username[0]}</Avatar>
          </div>
          ) : (
          <div className="nav-right-btn-group">
            <ContainedButton text="Logowanie" onClick={() => navigate('/login')}/>
            <ContainedButton text="Rejestracja" onClick={() => navigate('/register')}/>
          </div>
          )
      }

      
    </nav>
  );
};
