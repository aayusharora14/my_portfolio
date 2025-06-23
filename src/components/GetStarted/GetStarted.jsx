import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
    const preWrittenText = encodeURIComponent(
        `Hello,\n\nInterested in hiring/collaborating with you.\n\nPlease provide the following details:\n\n- Your Name:\n- Company Name:\n- Contact Information (at least 2 sources):\n- Additional Notes:\n\nThank you!`
    );

    return (
        <div id="get-started" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Contact</span>
                    <span className="secondaryText">
                        Contact for hiring or project collaboration.
                        <br />
                        Kindly include all the requested details in your message.
                    </span>
                    <a 
                        href={`mailto:aayusharora2510@gmail.com?subject=Hiring Inquiry&body=${preWrittenText}`} 
                        className="button"
                    >
                        Contact Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
