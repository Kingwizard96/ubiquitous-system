import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Assuming you have your custom CSS file for styles
import firstSlideImage from "/images/full.png";
import secondSlideImage from "/images/jar.png";
import thirdSlideImage from "/images/raw.png";

export default function App() {
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <Carousel 
      prevLabel="Previous" 
      nextLabel="Next" 
      pause={isPaused ? "hover" : false} 
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