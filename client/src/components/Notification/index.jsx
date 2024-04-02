import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './index.css';

const Notification = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div className="text-center" id='notification' >
      {show && (
        <Alert variant="info" onClose={handleClose} dismissible>
          {/* Wrap the text inside an anchor tag */}
          <a href="your_shipping_page_url_here" target="_blank" rel="noopener noreferrer">
            Free shipping on orders over $40!
          </a>
        </Alert>
      )}
    </div>
  );
}

export default Notification;
