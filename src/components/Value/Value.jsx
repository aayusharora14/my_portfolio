import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
    MdOutlineArrowDropDown,
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const Value = () => {
    return (
        <section id="value" className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left side */}
                <div className="v-left">
                    <div className="imagecontainer">
                        <img src="./Untitled_Project_V2.gif" alt="" width="420px" height="420px" className="" />
                    </div>
                </div>

                {/* right */}
                <div className="flexColStart v-right">
                    <span className="orangeText">About Me</span>

                    <span className="primaryText">A Small Peek Into My Journey</span>

                    <span className="secondaryText">
                        I am a proactive Computer Science student at Manipal University with a strong foundation in programming languages like C, JavaScript, React, Python, and Java. My practical experiences include a MERN Stack training program, contributing to many projects.
                        <br></br>
                        My projects not only showcase my technical proficiency but also reflects my keen interest in the finance & IT sector and my ability to leverage technology for innovative solutions.

                        Beyond my academic and professional pursuits, I actively participate in hackathons.

                        <br>
                        </br>
                        I am eager to bring my skills, passion, and proactive mindset to contribute to challenging projects and foster a collaborative work environment.
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton ">
                                            {/* just for getting state of item */}
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName("expanded")
                                                        : setClassName("collapsed")
                                                }
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span
                                                className="primaryText"
                                            >
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;