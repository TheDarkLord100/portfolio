import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target)
        emailjs.sendForm('service_og7x7eb', 'template_o9pqwco', event.target).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('SUCCESS');
                event.target.reset();
            },
            (error) => {
                console.log('FAILED...', error);
                setStatus('ERROR');
            },
        );
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label>
                Full name
            </label>
            <input
                type="text"
                name="user_name"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Vijayant Singh"
                required
            />
            <label>
                Email address
            </label>
            <input
                type="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mail@email.com"
                required
            />
            <label>
                Your message
            </label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your question or message"
                required
            />
            <button type="submit">Submit</button>
            {status === 'SUCCESS' && <p>Thanks for your submission!</p>}
            {status === 'ERROR' && <p>Ooops! There was an error.</p>}
        </form>
    );
};

export default ContactForm;
