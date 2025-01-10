import { FilterSidebar } from '../shared-components/FilterSidebar';
import { ProductGrid } from '../shared-components/ProductGrid';
import './RecommendContentPage.css';

export const RecommendContentPage = () => {
  const handleFilterChange = (filters) => {
    console.log('Selected filters:', filters);
  };

  return (
    <div className="recommend-page">
      <div className="content">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="product-section">
          <h2 className="section-title">Na podstawie niedawnej aktywności wybraliśmy dla Ciebie:</h2>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};
