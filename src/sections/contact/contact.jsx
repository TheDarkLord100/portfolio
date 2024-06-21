import React from 'react'
import ContactForm from '../../components/form/form'
import './contact.css';
import GIF from './../../assets/contact.gif';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
    return (
        <section>
            <div className="section-heading">
                <span className='accent'>03.</span>Contact
            </div>
            <div className="section-content">
                <div className="form">
                    <ContactForm />
                </div>
                <div className="contact-text">
                    <div className="contact-top">
                        <div className="contact-heading">
                            I’d love to hear from you.
                        </div>
                        <div className="contact-content">
                            I’m always excited to connect with like-minded professionals,
                            discuss new projects, or explore opportunities for collaboration.
                            Whether you have a question, a project idea, or just want to say
                            hello, feel free to reach out!
                        </div>
                    </div>
                    <div className="contact-bottom">
                        <div className="contact-info">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>vijayantsingh1000@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <span>+91 73184 70477</span>
                            </div>
                            <div className="contact-item">
                                <FaLinkedin className="contact-icon" />
                                <span>Vijayant Singh</span>
                            </div>
                            <div className="contact-item">
                                <FaGithub className="contact-icon" />
                                <span>TheDarkLord100</span>
                            </div>
                        </div>
                        <div className="contact-gif">
                            <img src={GIF} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
