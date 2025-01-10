import React from 'react';
import './ProductSection.css';

import { ProductCard } from './productCard';
import { Separator } from './Separator'

export const ProductSection = ({ title = "Nowości", products = [] }) => {
  const defaultProducts = [
    {
      id: 1,
      name: "Product-name",
      author: "Product-author",
      rating: 4.7,
      image: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4l",
      starImage: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4m"
    },
    {
      id: 2,
      name: "Product-name",
      author: "Product-author",
      rating: 4.7,
      image: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4n",
      starImage: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4o"
    },
    {
      id: 3,
      name: "Product-name",
      author: "Product-author",
      rating: 4.7,
      image: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4p",
      starImage: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4q"
    },
    {
      id: 4,
      name: "Product-name",
      author: "Product-author",
      rating: 4.7,
      image: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4r",
      starImage: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4s"
    },
    {
      id: 5,
      name: "Product-name",
      author: "Product-author",
      rating: 4.7,
      image: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4t",
      starImage: "https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4u"
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <div className="product-section">
      <div className="section-header">
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
        <button className="view-more-btn">
          <span>Zobacz więcej</span>
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4v" alt="arrow" className="arrow-icon" />
        </button>
      </div>
      
      <Separator />

      <div className="products-container">
        {displayProducts.map((product, index) => (
          <ProductCard product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

ProductSection.defaultProps = {
  title: "Nowości",
  products: []
};

export default ProductSection;
