import React from 'react';
import { Separator } from './Separator'
import './BookDetails.css';
import 'material-icons/iconfont/material-icons.css'

export const BookDetails = ({
  title = 'Domyślny Tytuł',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sodales purus, eget tempus dolor luctus et. Proin eget dolor quis neque fringilla auctor eget in felis. Sed finibus sapien eu nibh vestibulum suscipit. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur luctus augue nisi, at aliquet diam laoreet ut. Donec rutrum magna porta enim gravida ornare. Suspendisse potenti. Donec consequat augue tincidunt nulla vestibulum gravida. Sed sapien augue, consequat a diam ut, fermentum fermentum velit. Pellentesque leo ante, faucibus eu venenatis in, suscipit consequat sapien. Proin scelerisque ligula quis dapibus varius. Proin iaculis mauris nec velit tincidunt, nec maximus dolor facilisis. Pellentesque feugiat condimentum magna sit amet convallis. Sed at metus aliquam, lobortis augue dapibus, ultrices elit. Duis sagittis massa sed nisl lacinia dapibus. Proin aliquam dui a nunc lacinia tempus. Morbi porta mi condimentum, dapibus neque id, accumsan mauris. Phasellus sagittis egestas facilisis.',
  image = 'Domyślna Grafika'
}) => {
  return (
    <div className="book-details">
      <div className="product-image-container">
        {
          image != 'default' ? (
            <img src={image} alt="Book cover" className="product-page-product-image" />
          ) : (
            <span className="material-icons">import_contacts</span>
          )
        }
      </div>
      
      <div className="description-container">
        <div className="title-section">
          <h1 className="book-title">{title}</h1>
        </div>

        <Separator />
        
        <div className="synopsis-section">
          <h2 className="section-title">O książce</h2>
          <p className="book-description">{description}</p>
        </div>

        <Separator />
        
        <div className="products-management-btns-container">
          <button className="reading-button">
            + Do przeczytania
          </button>
        </div>
      </div>
    </div>
  );
};
