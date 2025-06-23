import React from 'react';
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Aayush_Resume_1.pdf'; // Replace with the correct path to your PDF file
        link.download = 'Aayush_Resume_1.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "ease-in",
                            }}
                        >
                            Aayush Arora<br />
                        </motion.h1>
                    </div>
                    <div className="flexColStart secondaryText flexhero-des">
                        <TypeAnimation
                            sequence={[
                                "Frontend Development",
                                1000,
                                "Data Visualization",
                                1000,
                                "API Development",
                                1000,
                                "Java Programming",
                                1000,
                                "C Programming",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '3.5vh' }}
                        />
                    </div>
                    <div className="flex">
                        <div className="button" onClick={handleDownloadResume} style={{ marginRight: '2rem' }}>Download Resume</div>

                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={17} duration={9} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Projects</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={19} duration={9} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Certifications</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={22} duration={9} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Hackathons Participation</span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "ease-out",
                        }}
                        className="image-container"
                    >
                        <img src="./Screenshot-2-1-modified.png" alt="profile photo" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
