import React from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.min.css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
    return (
        <div id="residencies" className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="flexColStart r-head">
                    <span className="orangeText">Projects Gallery</span>
                    <span className="primaryText">Transforming Concepts into Results</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SlideNextButton />
                    {/* slider */}
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />

                                <span className=" r-price">
                                    <span style={{ color: "orange", fontSize: "14px" }}>Tech Stack:</span>
                                    <span className="tech-stack">{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>

                                {/* Add two buttons with separate href links */}
                                <div className="button-container">
                                    <a href={card.button1Link}>
                                        <button className="r2-button">{card.button1Text}</button>
                                    </a>
                                    <a href={card.button2Link}>
                                        <button className="r3-button">{card.button2Text}</button>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Residencies;

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} className="r-prevButton">
                &lt;
            </button>
            <button onClick={() => swiper.slideNext()} className="r-nextButton">
                &gt;
            </button>
        </div>
    );
};
