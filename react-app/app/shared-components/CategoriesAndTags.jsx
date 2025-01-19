import React from 'react';
import { Separator } from './Separator';
import './CategoriesAndTags.css';

export const CategoriesAndTags = ({
  categories = [],
  tags = [],
  other = [],
  author = ''
}) => {
  return (
    <div className="categories-container">
      <div className="category-section">
        <p className="category-section-text">
          Kategorie: {categories.join(', ')}
        </p>
      </div>

      <Separator />
      
      <div className="tags-section">
        <p className="tags-section-text">
          Tagi: {tags.map(tag => `#${tag}`).join(', ')}
        </p>
      </div>
      
      <Separator />

      <div className="other-section">
        <p className="other-section-text">
          Inne: {other.join(', ')}
        </p>
      </div>

      <Separator />

      <div className="author-section">
        <p className="author-section-text">
        Autor: {author}
        </p>
      </div>
      
      <Separator />
    </div>
  );
};

