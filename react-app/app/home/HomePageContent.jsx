import React, {useState, useEffect} from 'react';
import { Carousel } from '../shared-components/Carousel';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ProductSection } from '../shared-components/ProductSection';
import './HomePageContent.css';

export const HomePageContent = () => {
  const [newBooksError, setNewBooksError] = useState(false)
  const [popularBooksError, setPopularBooksError] = useState(false)
  const [newBooks, setNewBooks] = useLocalStorage('newBooks', undefined)
  const [popularBooks, setPopularBooks] = useLocalStorage('popularBooks', undefined)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch(
      'http://localhost:3000/products/getmatching',
      {
        method: "POST",
        body: JSON.stringify(
          {
            tags: 'Nowe'
          }
        ),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(res => {
      if(res.ok)
        return res.json()
      else {
        // error while fetching data
        setNewBooksError(true)
      }
    }).then(data => setNewBooks(data))
  
    await fetch(
        'http://localhost:3000/products/getmatching',
        {
          method: "POST",
          body: JSON.stringify(
            {
              tags: 'Bestsellery'
            }
          ),
          headers: {
            "Content-Type": "application/json"
          }
        }
    ).then(res => {
        if(res.ok)
          return res.json()
        else {
          // error while fetching data
          setPopularBooksError(true)
        }
    }).then(data => setPopularBooks(data))
  }

  return (
    <div className="home-page">
      <Carousel />
      <ProductSection title="Nowości" products={newBooks} />
      <ProductSection title="Popularne" products={popularBooks}/>
    </div>
  );
};

export default HomePageContent