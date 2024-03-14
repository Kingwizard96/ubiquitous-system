import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import firstSlideImage from "/images/full.png";
import secondSlideImage from "/images/jar.png";
import thirdSlideImage from "/images/raw.png";

export default function CustomCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleSelect = (selectedIndex, e) => {
    if (isPaused) {
      // Prevent auto sliding when paused
      return;
    }
    setActiveIndex(selectedIndex);
  };

  return (
    <Carousel 
      activeIndex={activeIndex}
      onSelect={handleSelect}
      prevLabel="Previous" 
      nextLabel="Next" 
      interval={isPaused ? null : 3000} // Set interval to null when paused
    >
      <Carousel.Item>
        <div className="image-container">
          <img src={firstSlideImage} alt="First slide" className="carousel-image" />
          <div className="pause-button" onClick={handlePause}>
            {isPaused ? "Play" : "Pause"}
          </div>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img src={secondSlideImage} alt="Second slide" className="carousel-image" />
          <div className="pause-button" onClick={handlePause}>
            {isPaused ? "Play" : "Pause"}
          </div>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img src={thirdSlideImage} alt="Third slide" className="carousel-image" />
          <div className="pause-button" onClick={handlePause}>
            {isPaused ? "Play" : "Pause"}
          </div>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}