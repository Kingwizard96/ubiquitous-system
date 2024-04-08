import React from 'react';
import './index.css';

export default function Shipping () {
  return (
    <div id='shipping-container' className="container mt-5">
      <h1 id='shipping-heading' className="text-center">Shipping Policy</h1>
      <p className="text-center">Please read the following terms and conditions carefully before using our website.</p>

    <br/>
      <div className="section">
        <h2>When will I receive my order?</h2>
        <p>
        Buddii Box offers shipping from USPS and UPS. With USPS packages are delivered between 2-8 business days depending whether you choose priority mail (2 days) or parcel select ground (5-8 days). With UPS we offer UPS Ground only. All UPS Ground packages are guaranteed delivery within 1-5 business days. The delivery date is set at the time of pick up according to the distance the package is traveling  
        </p>
      </div>

      <div className="section">
        <h2>Delivery Time</h2>
        <p>
        Any orders received before 3 PM Central time will be shipped the day of. Any orders after 3 PM Central time will be shipped the next day.  
        </p>
      </div>

      <div className="section">
        <h2>International Shipping</h2>
        <p>
        Yes, we offer international shipping through UPS. The average cost is $40. That price includes customs and duties fees.     
        </p>
      </div>

      <div className="section">
        <h2>Shipping Cost</h2>
        <p>
        Shipping cost varies from $9-$14 to the 48 contiguous states , depending on what service you choose. Shipping to Alaska and Hawaii is about $15. We also ship to Canada with an average cost of $30 with UPS. 
        </p>
      </div>

    </div>
  );
}