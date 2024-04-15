// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <div className="contact-content">
                    <h1 className="contact-heading">Contact</h1>
                    <div className="contact-options">
                        <a href="tel:+919050482008" className="contact-option">
                            <img src="/phone_icon.png" alt="Phone" className="contact-icon" />
                            Call
                        </a>
                        <a href="mailto:aayusharora2510@gmail.com" className="contact-option">
                            <img src="/email_icon.png" alt="Email" className="contact-icon" />
                            Email
                        </a>
                        <a href="https://wa.me/9050482008" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="/whatsapp_icon.png" alt="WhatsApp" className="contact-icon" />
                            WhatsApp
                        </a>
                        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="/instagram_icon.png" alt="Instagram" className="contact-icon" />
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="/linkedin_icon.png" alt="LinkedIn" className="contact-icon" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="/github_icon.png" alt="GitHub" className="contact-icon" />
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="conta-image">
                    <img src="/globe_social.gif" alt="Contact" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
