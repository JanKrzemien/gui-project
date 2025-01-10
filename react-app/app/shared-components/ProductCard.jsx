import React from 'react';
import './ProductCard.css';

export const ProductCard = ({product = {id: -1, image: 'https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4l', name: 'default', rating: 0, starImage: 'https://dashboard.codeparrot.ai/api/assets/Z4EEWQIBBLnlud4m'}, index}) => {
    return <div key={product.id || index} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <button className="add-to-list-btn">+ Add to list</button>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-author">{product.author}</p>
                <div className="rating-container">
                  <span className="rating">{product.rating}</span>
                  <img src={product.starImage} alt="rating star" className="star-icon" />
                </div>
              </div>
}