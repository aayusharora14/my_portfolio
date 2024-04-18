import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
    // Pre-written text for the email body
    const preWrittenText = encodeURIComponent("Hello, Please follow the format asked here without these your request will be discarded \n\nInterested in hiring you for a project or Internship or Job ?. \n\n Mention the name of your company. \n\n Please provide atleast 2 sources of contact. \n\nThank You");

    return (
        <div id="get-started" className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Hire Me</span>
                    <span className="secondaryText">
                        Contact for hiring or if you want to collaborate for any project
                        <br />
                        Kindly mention details in the mail.
                    </span>
                    {/* Modified button with mailto link including pre-written text */}
                    <a href={`mailto:aayusharora2510@gmail.com?subject=Hiring Inquiry&body=${preWrittenText}`} className="button">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
