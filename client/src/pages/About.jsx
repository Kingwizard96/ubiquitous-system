import React from 'react';
import aboutImage from '/images/downtown.png'; // Import your image file


export default function About() {
  return (
    <div id='about-container' className="container mt-5">
      <h1 id='about-heading' className="text-center">About Us</h1>
      <p className="text-center">Learn more about our company and mission.</p>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <br/>
        
        <div className="about-text">
          <h2 id='story'>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis nec metus finibus euismod. Donec non posuere ante.
          </p>
            <br />
          <h2 id='story'>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis nec metus finibus euismod. Donec non posuere ante.
          </p>
          <br />

          <h2 id='story'>Our Values</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu felis nec metus finibus euismod. Donec non posuere ante.
          </p>
    <br />

         

        </div>
      </div>
    </div>
  );
}

