import React from 'react';
import './ProductCard.css';

export const ProductCard = (
  {
    product = {
      book_id: -1,
      productPicture: 'default',
      title: 'default title',
      author: 'default author',
      global_rating: 0
    }
  }) => {
  let image = () => {
    const byteCharacters = atob(product.productPicture);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));
  }
  
  return  <div className="product-card">
            <div className="product-image-container">
                {
                  product.productPicture == 'default' ? (
                    <span className="material-icons">import_contacts</span>
                  ) : (
                    <img src={image()} alt="product-image" className="product-image" />
                  )
                }
                <button className="add-to-list-btn">+ Add to list</button>
            </div>
            <p className="product-name">{product.title}</p>
            <p className="product-author">{product.author}</p>
            <div className="rating-container">
              <span className="rating">{product.global_rating}</span>
              <span className="material-icons">star</span>
            </div>
          </div>
}