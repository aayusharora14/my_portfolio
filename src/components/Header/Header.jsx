import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <a href="#hero"> <img src="./logo.png" alt="logo" width={80} /> </a>
                <div className="flexCenter h-menu">
                    <div className="hamburger" onClick={toggleMenu}>
                        {/* Conditional rendering for hamburger icon */}
                        {showMenu ? (
                            <p>Close </p>
                        ) : (
                            <div>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                        )}
                    </div>
                    <div className={`menu-items ${showMenu ? "show" : ""}`}>
                        <a href="#companies">Skills</a>
                        <a href="#value">Education</a>
                        <a href="#Franchise">Certifications</a>
                        <a href="#residencies">Projects</a>
                        <a href="#get-started">Contact Me</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;
