import React, { useState } from 'react';
import './Carousel.css';

export const Carousel = ({ 
  slides = [
    {
      image_path: '/carousel-slide-1.png',
      title: 'Targi książi 2024!',
      description: '4 dni, około 56 tysięcy odwiedzających, ponad 470 wystawców, ponad 800 autorów, ponad 600 akredytowanych dziennikarzy i twórców treści internetowych, 900 spotkań, prezentacji, warsztatów, 30 tysięcy widzów TV Targowej – tak w skrócie można podsumować 27. Międzynarodowe Targi Książki w Krakowie®, które odbyły się w dniach 24-27 października 2024 r.'
    },
    {
      image_path: '/carousel-slide-2.jpg',
      title: 'Magiczny obrazek numer 2',
      description: 'Cras sollicitudin erat non libero maximus tincidunt. Sed a bibendum nisl. Aenean aliquet ut est vitae suscipit. Aenean risus nibh, pretium porttitor enim quis, aliquet ultricies ante. Integer eleifend nisl sed luctus tincidunt. Curabitur dignissim viverra lobortis. Pellentesque accumsan pharetra felis, vitae iaculis purus dapibus iaculis. '
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
      <img 
        src={slides[currentIndex].image_path} 
        alt={slides[currentIndex].image_path}
        className="carousel-image"
      />
      
      <button className="carousel-button left" onClick={goToPrevious}>
        <span className="material-icons">arrow_left</span>
      </button>
      
      <button className="carousel-button right" onClick={goToNext}>
        <span className="material-icons">arrow_right</span>
      </button>

      <div className="content-overlay">
        <h2 className="carousel-title">{slides[currentIndex].title}</h2>
        <p className="carousel-description">{slides[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Carousel;
