import React from "react";
import './Companies.css';

const Companies = () => {
    return (
        <section className="c-wrapper">
            <div id="companies" className="paddings innerWidth flexCenter c-container">
                <div className="headingcompany">
                    Tech Stack
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C" />
                    <span>C</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" />
                    <span>Python</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
                    <span>Java</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
                    <span>HTML</span>
                </div>
                 <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
                    <span>CSS</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
                    <span>JavaScript</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/sql.png" alt="SQL" />
                    <span>SQL</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/php.png" alt="PHP" />
                    <span>PHP</span>
                </div>
                <div className="company-item">
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
                    <span>React</span>
                </div>
               
            </div>
        </section>
    );
};

export default Companies; 
