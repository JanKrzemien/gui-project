import { Filters } from '../shared-components/Filters';
import { ProductCard } from '../shared-components/ProductCard';
import './ProductsContentPage.css';

export const ProductsContentPage = () => {
  return (
    <div className="users-page">
      <div className="search-results">
        <span className="search-title">Wyszukiwanie dla "Tytuł książki":</span>
      </div>
      <Filters />
      <div className="product-list">
        {Array.from({ length: 15 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

