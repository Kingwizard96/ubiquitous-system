import React from 'react';
import './index.css';

export default function HeroSection() {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto py-12 lg:flex lg:justify-between">
        {/* Large image on the left */}
        <div className="lg:w-1/9 ">
          <img className="w-full h-auto lg:h-full lg:w-auto object-cover" src="//media.tiffany.com/is/image/tiffanydm/HOLIDAY-Hero-Desktop?$tile$&amp;wid=2992" alt="Tiffany HardWear" />
        </div>
        {/* Text and button on the right */}
        <div className="lg:w-1/2 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">Tiffany HardWear</h1>
            <p className="mb-8">Inspired by a bracelet from 1971 found in the House’s archive, the Tiffany HardWear collection features bold designs that play with tension, proportion, and balance.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

