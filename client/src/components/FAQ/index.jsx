import React from 'react';
import './index.css';

// FAQ component
export default function FAQ () {
return(
      <div id='faq-container' className="container mt-5">
        <h1 id='faq-heading' className="text-center">Frequently Asked Questions</h1>
    <h2 className="text-center">Got questions? We've got answers!</h2>
    <br/>
    
    <div className="faq-item">
        <h3 className="question">What comes included in a Buddii Box?</h3>
      <p className="answer">All Buddii Boxes include a rolling tray, grinder, smell proof glass jar, ash tray, poker, and a Mini BIC lighter.</p>
     </div>

     <div className="faq-item">
      <h3 className="question">Is Buddii Box smell proof?</h3>
      <p className="answer">Buddii Box contains an air tight top that contains the smell inside the box along with the smell proof jar.</p>
     </div>
         {/* Add more questions and answers here */}
    <div className="faq-item">
      <h3 className="question">What are the dimensions of Buddii Box Go?</h3>
      <p className="answer">The dimensions are L 7 1/2'' x W 4 1/2'' x H 2 1/4''</p>
    </div>

    <div className="faq-item">
      <h3 className="question">How can I clean my Buddii Box?</h3>
      <p className="answer">We recommend using a damp cloth to clean the box. Do not use any harsh chemicals or abrasive materials to clean the box.</p>
    </div>

    </div>
    );
}
