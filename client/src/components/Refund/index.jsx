import React from 'react';
import './index.css';

export default function Refund () {
  return (
    <div id='refund-container' className="container mt-5">
      <h1 id='refund-heading' className="text-center">Refund Policy</h1>
      <p className="text-center">Please read the following terms and conditions carefully before using our website.</p>

      <div className="section">
        <h2>Returns</h2>
        <p>
          Our policy lasts 14 days. If 14 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.
          <br/>
          To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
        </p>
      </div>

      <div className="section">
        <h2>Additional non-returnable items:</h2>
        <p>
        • Gift cards<br />
        • Downloadable software products<br />
        </p>
        </div>
        <div>
        <p>To complete your return, we require a receipt or proof of purchase.
        <br/>
        <br/>
            Please do not send your purchase back to the manufacturer.</p>
        <br/>     
      </div>

      <div className="section">
        <p>
          Only regular priced items may be refunded, unfortunately, sale items cannot be refunded.
            <br/>
          Some situations where only partial refunds are granted (if applicable):
          <ul>
            <li>Any item that is returned more than 30 days after delivery</li>
          </ul>
          <ul>
            <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
        </ul>
        </p>
      </div>

      <div className="section">
        <h2>Refunds (if applicable)</h2>
        <p>
          Once your return is received and inspected, we will send you an email to notify you that we have received your returned item.
          If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
        </p>
      </div>

      <div className="section">
        <h2>Exchanges (if applicable)</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at info@buddiibox.com and send your item to: Houston TX 77089, United States.
        </p>
      </div>


      <div className="section">
        <h2>Late or missing refunds (if applicable)</h2>
        <p>If you haven’t received a refund yet, first check your bank account again.
Then contact your credit card company, it may take some time before your refund is officially posted.
Next contact your bank. There is often some processing time before a refund is posted.
If you’ve done all of this and you still have not received your refund yet, please contact us at info@buddiibox.com.
         </p>      
      </div>

      <div className="section">
        <h2>Shipping</h2>
        <p>
          To return your product, you should mail your product to: Houston TX 77089, United States
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
        </p>
      </div>


    </div>
  );
}