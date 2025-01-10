import React from 'react';
import { Carousel } from '../shared-components/Carousel';
import { ProductSection } from '../shared-components/ProductSection';
import './HomePageContent.css';

export const HomePageContent = () => {
  return (
    <div className="home-page">
      <Carousel />
      <ProductSection title="Nowości" />
      <ProductSection title="Popularne" />
    </div>
  );
};

export default HomePageContent