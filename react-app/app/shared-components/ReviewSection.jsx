import React, { useState } from 'react';
import { Separator } from './Separator';
import { ContainedButton } from './Buttons';
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router'
import './ReviewSection.css';

export const ReviewSection = ({add}) => {
  const [rating, setRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [userData, setUserData] = useLocalStorage('userData', undefined)
  const navigate = useNavigate()

  const showReviewForm = () => {
    document.getElementsByClassName('review-container')[0].setAttribute('open', 'true')
    setShowForm(true)
  }

  const hideReviewForm = () => {
    // default values
    setRating(0)
    setReviewText('')
    document.getElementsByClassName('review-container')[0].removeAttribute('open')
    setShowForm(false)
  }

  const onCancel = () => {
    hideReviewForm()
  }
 
  const onSubmit = () => {
    add({comment: reviewText, rating: rating, userName: userData.user.user.username, userAvatar: userData.user.user.profilePicture})
    hideReviewForm()
  }

  return (
    <div className="review-section">
      <div className='review-title-bar'>
        <h2 className="review-title">Recenzje</h2>
        {
          userData ? 
            !showForm ? <ContainedButton text={'Napisz recenzje'} onClick={showReviewForm}/> : <ContainedButton text={'Zamknij formularz'} onClick={hideReviewForm}/>
          : (
            <ContainedButton text={'Zaloguj się aby dodać komentarz'} onClick={() => navigate('/login')}/>
          )
        }
        
      </div>

      <div className='review-container'>
        <div className="rating-section">
          <label className="rating-label">Ocena:</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= rating ? "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud65" : "https://dashboard.codeparrot.ai/api/assets/Z4FhowIBBLnlud66"}
                alt={`Star ${star}`}
                onClick={() => setRating(star)}
                className="star-icon"
              />
            ))}
          </div>
        </div>

        <div className="review-input-section">
          <label className="text-label">Tekst recenzji</label>
          <div className="textarea-container">
            <textarea
              className="review-textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Tekst..."
            />
            <label className="floating-label">Tekst</label>
          </div>
        </div>

        <div className="button-container">
          <ContainedButton text={'Anuluj'} onClick={onCancel}/>
          <ContainedButton text={'Opublikuj'} onClick={onSubmit}/>
        </div>
      </div>


      <Separator />
    </div>
  );
};
