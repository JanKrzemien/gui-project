import React,{useState} from 'react';
import { BookDetails } from '../shared-components/BookDetails';
import { CategoriesAndTags } from '../shared-components/CategoriesAndTags';
import { GroupsSection } from '../shared-components/GroupsSection';
import { ReviewSection } from '../shared-components/ReviewSection';
import { CommentsSection } from '../shared-components/CommentsSection';
import './ProductPageContent.css';

export const ProductPageContent = ({product}) => {
  const [reviews, setReviews] = useState([
    {
      userName: "Dobromir",
      userAvatar: "/user-icon.png",
      rating: 3,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sodales purus, eget tempus dolor luctus et. Proin eget dolor quis neque fringilla auctor eget in felis. Sed finibus sapien eu nibh vestibulum suscipit. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur luctus augue nisi, at aliquet diam laoreet ut. Donec rutrum magna porta enim gravida ornare. Suspendisse potenti. Donec consequat augue tincidunt nulla vestibulum gravida. Sed sapien augue, consequat a diam ut, fermentum fermentum velit. Pellentesque leo ante, faucibus eu venenatis in, suscipit consequat sapien. Proin scelerisque ligula e."  
    }
  ])
  
  const addReview = (review) => {
    setReviews([...reviews, review])
  }

  return (
    <div className="product-page">
      <div className="product-content">
        <BookDetails 
          title={product.title}
          description={product.summary}
          image={product.productPicture}
        />

        <div className='product-content-second-row'>
          <CategoriesAndTags 
            categories={product.genres.split('|')}
            tags={product.tags.split('|')}
            other={product.other.split('|')}
            author={product.author}
          />
          <GroupsSection />
        </div>

        <ReviewSection add={addReview}/>
        <CommentsSection comments={reviews}/>
      </div>
    </div>
  );
};
