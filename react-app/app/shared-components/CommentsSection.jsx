import React from 'react';
import './CommentsSection.css';

const defaultComment = {
  userName: "Dobromir",
  userAvatar: "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud67",
  rating: 3,
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sodales purus, eget tempus dolor luctus et. Proin eget dolor quis neque fringilla auctor eget in felis. Sed finibus sapien eu nibh vestibulum suscipit. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur luctus augue nisi, at aliquet diam laoreet ut. Donec rutrum magna porta enim gravida ornare. Suspendisse potenti. Donec consequat augue tincidunt nulla vestibulum gravida. Sed sapien augue, consequat a diam ut, fermentum fermentum velit. Pellentesque leo ante, faucibus eu venenatis in, suscipit consequat sapien. Proin scelerisque ligula e."
};

export const CommentsSection = ({ comments = [defaultComment] }) => {
  const renderStars = (rating) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            key={star}
            src={star <= rating ? "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud65" : "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud66"}
            alt={`star ${star}`}
            className="star"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="comments-section">
      {comments.map((comment, index) => (
        <div key={index} className="comment-container">
          <div className="separator-top">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud68" alt="separator" />
          </div>
          
          <div className="comment-content">
            <div className="upper-row">
              <div className="user-info">
                <div className="user-avatar">
                  <img src={comment.userAvatar} alt="user avatar" />
                </div>
                <div className="user-name">{comment.userName}</div>
              </div>
              {renderStars(comment.rating)}
            </div>
            
            <div className="comment-text">
              {comment.comment}
            </div>
          </div>

          <div className="separator-bottom">
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud69" alt="separator" />
          </div>
        </div>
      ))}
    </div>
  );
};

