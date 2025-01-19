import React, { useState } from 'react';
import './MainNavigation.css';
import { ContainedButton, OutlineButton, TextButton } from './Buttons';
import { OutlinedInput } from './Inputs'
import { Select, MenuItem, FormControl, InputLabel, Avatar } from '@mui/material';
import { useNavigate } from "react-router";
import { useLocalStorage } from '@uidotdev/usehooks'
import 'material-icons/iconfont/material-icons.css'
import { SmallProductCard } from './smallProductCard';

export const MainNavigation = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useLocalStorage('userData', undefined)
  const [books, setBooks] = useLocalStorage('books', [])
  const [groups, setGroups] = useLocalStorage('groups', [])


  const [category, setCategory] = useState('Wszystkie');
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState(books.slice(0, 3))

  const navigateSearch = () => {
    let url = ``
    switch(category) {
      case "Wszystkie":
      case "Książki":
        url += `/products/?title=${search}`
        break
      case "Autorzy":
        url += `/products/?author=${search}`
        break
      case "Inne":
        url += `/groups/?name=${search}`
        break
    }
    navigate(url)
  }

  const handleSearchBarChange = (event) => {
    setSearch(event.target.value)

    switch(category) {
      case "Wszystkie":
      case "Książki":
        setFiltered( books.filter((book, index) => book.title.includes(search)).slice(0, 3) )
        break
      case "Autorzy":
        setFiltered( books.filter((book, index) => book.author.includes(search)).slice(0, 3) )
        break
      case "Inne":
        setFiltered( groups.filter((group, index) => group.name.includes(search)).slice(0, 3) )
        break
    }
  }

  const focusInAnimation = () => {
    document.getElementsByClassName('short-search-results')[0].style.display = "block"
  }
  const focusOutAnimation = () => {
    setTimeout(() => {
      document.getElementsByClassName('short-search-results')[0].style.display = "none"
    }, 500)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    switch(category) {
      case "Wszystkie":
      case "Książki":
        setFiltered( books.filter((book, index) => book.title.includes(search)).slice(0, 3) )
        break
      case "Autorzy":
        setFiltered( books.filter((book, index) => book.author.includes(search)).slice(0, 3) )
        break
      case "Inne":
        setFiltered( groups.filter((group, index) => group.name.includes(search)).slice(0, 3) )
        break
    }
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
              <OutlinedInput label="Szukaj książek, autorów i więcej" onChange={handleSearchBarChange} onFocus={focusInAnimation} onBlur={focusOutAnimation}/>
              <div className='short-search-results' open='f'>
                {
                  filtered.map((item, index) => (
                    <SmallProductCard product={item} key={index} />
                  ))
                }
              </div>
          </div>
          <OutlineButton className="search-btn" text={<span className="material-icons">search</span>} onClick={navigateSearch}/>
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
