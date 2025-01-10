import { useState } from 'react';
import './FilterSidebar.css';

export const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    genre: [],
    hobby: [],
    targetGroup: [],
    publisher: []
  });

  const handleCheckboxChange = (category, item) => {
    setFilters(prevFilters => {
      const updatedCategory = prevFilters[category].includes(item)
        ? prevFilters[category].filter(i => i !== item)
        : [...prevFilters[category], item];
      
      const newFilters = {
        ...prevFilters,
        [category]: updatedCategory
      };
      
      if (onFilterChange) {
        onFilterChange(newFilters);
      }
      
      return newFilters;
    });
  };

  const filterCategories = [
    { name: 'genre', label: 'Gatunek:' },
    { name: 'hobby', label: 'Hobby:' },
    { name: 'targetGroup', label: 'Grupa docelowa:' },
    { name: 'publisher', label: 'Wydawnictwo:' }
  ];

  const options = ['Coś 1', 'Coś 2', 'Coś 3', 'Coś 4', 'Coś 5'];

  return (
    <div className="filter-sidebar">
      <h2 className="filter-title">Dostosuj filtry:</h2>
      
      {filterCategories.map((category) => (
        <div key={category.name} className="filter-section">
          <h3 className="section-title">{category.label}</h3>
          <div className="checkbox-group">
            {options.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters[category.name].includes(option)}
                  onChange={() => handleCheckboxChange(category.name, option)}
                  className="checkbox-input"
                />
                <span className="checkbox-text">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
