import React from "react";
import data from "../../utils/slider2.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Franchise.css";
import { sliderSettings } from "../../utils/common";

const Franchise = () => {
    return (
        <div id="Franchise" className="r-wrapper">
            <div className="paddings innerWidth f-container">
                <div className="flexColStart r-head">
                    <span className="orangeText">Certifications</span>
                    <span className="primaryText">Credentials of Excellence</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SlideNextButton />
                    {/* slider */}
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart f-card">
                                <img src={card.image} alt="home" className="imagecard" />

                                <span className="secondaryText r-price">
                                    <span style={{ color: "orange" }}></span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                                <DownloadButton pdf={card.pdf} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const DownloadButton = ({ pdf }) => {
    const handleClick = () => {
        window.open(pdf, '_blank');
    };

    return (
        <button className="r-downloadButton" onClick={handleClick}>Download</button>
    );
};

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

export default Franchise;
