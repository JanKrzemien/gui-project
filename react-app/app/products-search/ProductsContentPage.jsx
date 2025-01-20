import { useLocalStorage } from '@uidotdev/usehooks';
import { Filters } from '../shared-components/Filters';
import { ProductCard } from '../shared-components/ProductCard';
import { Separator } from '../shared-components/Separator'
import './ProductsContentPage.css';
import { useEffect, useState } from 'react';

export const ProductsContentPage = ({title, author, otherSearch}) => {
  const [books, setBooks] = useLocalStorage('books', [])
  const [filtered, setFiltered] = useState(books)

  useEffect(() => {
    if(title != '') {
      setFiltered(books.filter((book, index) => book.title.includes(title)))
    } else if(author != '') {
      setFiltered(books.filter((book, index) => book.author.includes(author)))
    } else if(otherSearch != '') {
      setFiltered(books.filter((book, index) => book.tags.includes(otherSearch)))
    }
  }, [title, author, otherSearch])

  return (
    <div className="users-page">
      <div className="search-results">
        <span className="search-title">Wyszukiwanie dla "{title + author + otherSearch}":</span>
      </div>

      <Separator />

      <Filters />

      <Separator />

      <div className="product-list">
        {filtered.map((book, index) => (
          <ProductCard product={book} key={index} />
        ))}
      </div>
    </div>
  );
};

