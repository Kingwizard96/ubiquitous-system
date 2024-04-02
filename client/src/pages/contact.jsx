import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xbjnzwky");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');

    const handleLocalSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form',{email, message, name, phone, company});
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 py-12">
            <div className="w-full max-w-md">
                <form onSubmit={state.submitWithRedirect || handleLocalSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className='form-label'>
                            Your Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='form-input'
                            />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className='form-label'>
                            Your Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-input'
                            />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className='form-label'>
                            Your Phone:
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='form-input'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className='form-label'>
                            Your Company:
                        </label>
                        <input
                            type="text"
                            name="company"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className='form-input'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className='form-label'>
                            Your Message:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='form-input'
                        />
                    </div>
                   
                    <button type="submit" className='btn btn-primary' disabled={state.submitting}>{state.submitting ? 'submitting...' : 'submit'}
                    </button>

                {state.succeeded && <p>Thanks for reaching out!</p>}

                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                </form>
            </div>
        </div>
    );
}
    