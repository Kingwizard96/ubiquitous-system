import React from 'react';
import './index.css';

export default function Footer() {
  return (
    <footer className="py-3 bg-slate-950 text-white fixed bottom-0 w-full">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <h5>Section 1</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5>Section 2</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Support</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms of Service</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <br/>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="flex items-center gap-2">
                <label htmlFor="newsletter1" className="sr-only">Email address</label>
                <input id="newsletter1" type="text" className="form-control h-10" placeholder="Email address" />
                <button id='subscribeBtn' className="btn btn-primary h-10" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        

        <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top">
          <p className="mb-0">© 2024 BuddiiBox , Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="#"><img src="/images/x-logo.png" alt="Twitter" className="w-10 h-10 rounded-full" /></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src="/images/instagram.png" alt="Instagram" className="w-10 h-10 rounded-full" /></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><img src="./images/facebook.png" alt="Facebook" className="w-10 h-10 rounded-full" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}