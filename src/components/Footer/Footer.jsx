import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="f-wrapper">
            <div className=" innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={220} />
                </div>

                <div className="flexColStart f-right">

                    <span className="secondaryText">The Content on this website was last updated in 01/2025</span>

                </div>
            </div>
        </div>
    );
};

export default Footer;
