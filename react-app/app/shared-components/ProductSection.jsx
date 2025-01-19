import React from 'react';
import { useNavigate } from 'react-router';
import './ProductSection.css';
import 'material-icons/iconfont/material-icons.css'

import { ProductCard } from './ProductCard';
import { Separator } from './Separator'

export const ProductSection = ({ title = "Polecane", products = [] }) => {
  const navigate = useNavigate()
  
  const handleViewMore = () => {
    let url = `/products/?search=`
    switch(title) {
      case "Nowości":
        url += "Nowe"
        break
      case "Popularne":
        url += "Bestsellery"
        break
    }
    
    navigate(url)
  }
  
  return (
    <div className="product-section">
      <div className="section-header">
        <h2 className="title">{title}</h2>
        
        <button className="view-more-btn" onClick={handleViewMore}>
          <span className='view-more-btn-text'>Zobacz więcej</span>
          <span className="material-icons">arrow_right_alt</span>
        </button>
      </div>
      
      <Separator />

      <div className="products-container">
        {
          products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))
        }
      </div>
    </div>
  );
};
