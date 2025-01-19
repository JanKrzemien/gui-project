import React from 'react';
import { useNavigate } from 'react-router'
import { useLocalStorage } from '@uidotdev/usehooks';
import './ProductCard.css';
import 'material-icons/iconfont/material-icons.css'

export const ProductCard = (
  {
    product = {
      book_id: -1,
      productPicture: 'default',
      title: 'default title',
      author: 'default author',
      globalRating: 0
    }
  }) => {
    const navigate = useNavigate()
    const [userData, setUserData] = useLocalStorage('userData', undefined)

  const image = () => {
    const byteCharacters = atob(product.productPicture);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return URL.createObjectURL(new Blob([byteArray], { type: 'image/jpeg' }));
  }

  const handleAddToList = () => {
    if(userData) {
      console.log('fetchuje')
    } else {
      navigate('/login')
    }
  }
  
  return  <div className="product-card">
              <div className="product-image-container">
                <a className="product-image" onClick={() => navigate(`/product/${product.book_id}`)}>
                  {
                    product.productPicture == 'default' ? (
                      <span className="material-icons">import_contacts</span>
                    ) : (
                      <img src={image()} alt="product-image" className="product-image" />
                    )
                  }
                </a>
                <button className="add-to-list-btn" onClick={handleAddToList}>+ Add to list</button>
              </div>
              <a className="product-name" onClick={() => navigate(`/product/${product.book_id}`)}>
                <p className="product-name">{product.title}</p>
              </a>
              <p className="product-author">{product.author}</p>
              <div className="rating-container">
                <span className="rating">{product.globalRating}</span>
                <span className="material-icons">star</span>
              </div>
          </div>
}