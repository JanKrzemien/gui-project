import React, {useEffect} from 'react';
import { Separator } from './Separator';
import './CommentsSection.css';

export const CommentsSection = ({ comments = [] }) => {
  useEffect(()=>{
    console.log(comments)
  }, [JSON.stringify(comments)])

  return (
    <div className="comments-section">
      {comments.map((comment, index) => (
        <div key={index} className="comment-container">
          <div className="comment-content">
            <div className="comment-upper-row">
              <div className="comment-user-info">
                <div className="comment-user-avatar">
                  <img src={comment.userAvatar} alt="user avatar" className='comment-user-avatar-img'/>
                </div>
                <div className="comment-user-name">{comment.userName}</div>
              </div>
              <div className="comment-stars">
              {
              [1, 2, 3, 4, 5].map((star) => (
                <img
                  key={star}
                  src={star <= comment.rating ? "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud65" : "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud66"}
                  alt={`Star ${star}`}
                  className="comment-star-icon"
                />
              ))}
              </div>
            </div>
            
            <div className="comment-text">
              {comment.comment}
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
};

