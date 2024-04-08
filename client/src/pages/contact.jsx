import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Reusable input component
const InputField = ({ id, label, type, value, onChange, placeholder, required = false }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}:
    </label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default function Contact() {
  const [state, handleSubmit] = useForm("xbjnzwky");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission locally
    console.log('Form submitted locally:', formData);
    // You can add further local actions if needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id='contact-container' className="container mt-5">
      <h1 id='contactUs' className="text-center">Contact Us</h1>
      <p className="text-center">We'd love to hear from you! Drop us a message below.</p>
      <form id='contact-form'className='form' onSubmit={state.submitWithRedirect || handleLocalSubmit}>
        <InputField
          id="name"
          label="Your Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <InputField
          id="email"
          label="Your Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <InputField
          id="phone"
          label="Your Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button type="submit" id='contact-btn' className="btn btn-primary" disabled={state.submitting}>
          {state.submitting ? 'Submitting...' : 'Submit'}
        </button>
        {state.succeeded && <p className="text-success">Thanks for reaching out!</p>}
        <ValidationError 
          prefix="Form submission" 
          field="general"
          errors={state.errors}
        />
        <br />
      </form>
    </div>
  );
}