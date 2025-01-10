import React from 'react';
import './CategoriesAndTags.css';

export const CategoriesAndTags = ({
  categories = ['Przygodowe', 'Fantasy'],
  tags = ['Ksiazkaroku2024'],
  author = 'Jan Kowalski'
}) => {
  return (
    <div className="categories-container">
      <div className="category-section">
        <p className="section-text">
          Kategorie: {categories.join(', ')}
        </p>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4FhkgIBBLnlud61" alt="separator" className="separator" />
      </div>
      
      <div className="tags-section">
        <p className="section-text">
          Tagi: {tags.map(tag => `#${tag}`).join(', ')}
        </p>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4FhkgIBBLnlud62" alt="separator" className="separator" />
      </div>
      
      <div className="author-section">
        <p className="section-text">
          Inne: Autor: {author}
        </p>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z4FhkgIBBLnlud63" alt="separator" className="separator" />
      </div>
    </div>
  );
};

