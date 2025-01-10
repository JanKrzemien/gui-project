import React, { useState } from 'react';
import './Carousel.css';

export const Carousel = ({ 
  slides = [
    {
      image: 'https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4i',
      title: 'Targi książi 2024!',
      description: '4 dni, około 56 tysięcy odwiedzających, ponad 470 wystawców, ponad 800 autorów, ponad 600 akredytowanych dziennikarzy i twórców treści internetowych, 900 spotkań, prezentacji, warsztatów, 30 tysięcy widzów TV Targowej – tak w skrócie można podsumować 27. Międzynarodowe Targi Książki w Krakowie®, które odbyły się w dniach 24-27 października 2024 r.'
    }
  ] 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <img 
          src={slides[currentIndex].image} 
          alt={slides[currentIndex].title}
          className="carousel-image"
        />
        
        <button className="carousel-button left" onClick={goToPrevious}>
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4j" alt="Previous" />
        </button>
        
        <button className="carousel-button right" onClick={goToNext}>
          <img src="https://dashboard.codeparrot.ai/api/assets/Z4EEOgIBBLnlud4k" alt="Next" />
        </button>

        <div className="content-overlay">
          <h2 className="carousel-title">{slides[currentIndex].title}</h2>
          <p className="carousel-description">{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
