import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <a href="#hero"> <img src="./logo.png" alt="logo" width={100} /> </a>
                <div className="flexCenter h-menu">
                    <a href="#companies">Skills</a>
                    <a href="#value">Education</a>
                    <a href="#Franchise">Certifications</a>
                    <a href="#residencies">Projects</a>
                    <a href="#contact-us">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Header;
