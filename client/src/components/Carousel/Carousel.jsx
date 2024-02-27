import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Assuming you have your custom CSS file for styles
import firstSlideImage from "/images/full.png";
import secondSlideImage from "/images/jar.png";
import thirdSlideImage from "/images/raw.png";

export default function Carousel() {
  return (
    <Carousel prevLabel="Previous" nextLabel="Next">
      <Carousel.Item>
        {/* <Link to="/cart"> Use Link component with desired URL */}
          <img src={firstSlideImage} alt="First slide" className="carousel-image" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        {/* </Link> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <Link to="/cart"> Use Link component with desired URL */}
          <img src={secondSlideImage} alt="Second slide" className="carousel-image" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        {/* </Link> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <Link to="/cart"> Use Link component with desired URL */}
          <img src={thirdSlideImage} alt="Third slide" className="carousel-image" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        {/* </Link> */}
      </Carousel.Item>
    </Carousel>
  );
}