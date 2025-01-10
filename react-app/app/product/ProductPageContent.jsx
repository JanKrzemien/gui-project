import React from 'react';
import { BookDetails } from '../shared-components/BookDetails';
import { CategoriesAndTags } from '../shared-components/CategoriesAndTags';
import { GroupsSection } from '../shared-components/GroupsSection';
import { ReviewSection } from '../shared-components/ReviewSection';
import { CommentsSection } from '../shared-components/CommentsSection';
import './ProductPageContent.css';

export const ProductPageContent = () => {
  return (
    <div className="product-page">
      <div className="content">
        <div className="left-column">
          <BookDetails />
          <CategoriesAndTags />
        </div>
        <div className="right-column">
          <GroupsSection />
        </div>
      </div>
      <ReviewSection />
      <CommentsSection />
    </div>
  );
};
