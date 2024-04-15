import "./Hero.css";
import CountUp from "react-countup";
import { color, motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Aayush_resume.pdf'; // Replace with the correct path to your PDF file
        link.download = 'Aayush_resume.pdf';
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
                                "Software Engineer",
                                1000,
                                "Web Developer",
                                1000,
                                "Java Programmer",
                                1000,
                                "C Programmer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ fontSize: '5vh' }}
                        />
                    </div>

                    <div className="flexCenter">
                        <div className="button" onClick={handleDownloadResume} style={{ marginRight: '2rem' }}>Download Resume</div>

                        <button className="button" style={{ backgroundColor: "--black;" }}>
                            <a href="#">Let's Work Together</a>
                        </button>

                    </div>




                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={22} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Projects</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={0} end={19} duration={4} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Certifications</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={18} /> <span>+</span>
                            </span>
                            <span className="secondaryText">Awards Winning</span>
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
                        <img src="./hero-image.jpeg" alt="houses" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;