// Contact.jsx
import React from 'react';
import './Contact.css';



const Contact = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-container">
                <div className="contact-content">
                    <h1 className="contact-heading">Get in Touch</h1>
                    <div className="contact-options">
                        <a href="tel:+919050482008" className="contact-option">
                            <img src="https://img.shields.io/badge/Phone-_-green?style=flat-square&logo=phone" alt="Phone" className="contact-icon" />
                            Call
                        </a>
                        <a href="mailto:aayusharora2510@gmail.com" className="contact-option">
                            <img src="https://img.shields.io/badge/Email-_-red?style=flat-square&logo=gmail" alt="Email" width={"100%"} className="contact-icon" />
                            Email
                        </a>
                        <a href="https://wa.me/9050482008" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="https://img.shields.io/badge/WhatsApp-_-green?style=flat-square&logo=whatsapp" alt="WhatsApp" className="contact-icon" />
                            WhatsApp
                        </a>
                        <a href="https://www.linkedin.com/in/aayusharora14" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="https://img.shields.io/badge/LinkedIn-_-blue?style=flat-square&logo=linkedin" alt="LinkedIn" className="contact-icon" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/aayusharora14" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <img src="https://img.shields.io/badge/GitHub-_-blue?style=flat-square&logo=github" alt="GitHub" className="contact-icon" />
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
