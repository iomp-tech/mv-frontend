import React from "react";
import {useSelector} from "react-redux";

import OwlCarousel from "react-owl-carousel2";
import "../../assets/owl-carousel/owl.carousel.css";
import "animate.css";

import EventSliderItems from "./EventSliderItems";
import EventSliderLoading from "./EventSliderLoading";

const EventSlider = ({items, auths, categories, eventsType, isLoaded}) => {
    const slider = React.useRef();

    const options = {
        items: 1,
		loop: true,
		margin: 10,
        mouseDrag: false,
        animateIn: "animate__fadeIn",
        animateOut: "animate__fadeOut",
        autoplay: false,
        autoplayTimeout: 4000,
        autoHeight: true,
        responsive: {
            900: {
                autoplay: true,
            },
        },
    };

    const prev = () => {
        slider.current.prev();
    };

    const next = () => {
        slider.current.next();
    };

    return (
        <>
            {isLoaded ? (
                <OwlCarousel ref={slider} options={options}>
                    {items &&
                        items.map((obj) => (
                            <EventSliderItems
                                key={obj.id}
                                {...obj}
                                eventsType={eventsType[obj.type]}
                                auths={auths}
                                categories={categories[obj.category]}
                            />
                        ))}
                </OwlCarousel>
            ) : (
                <EventSliderLoading />
            )}
            <div className="event-arrow">
                <div className="arrow">
                    <div className="arrow-prev" onClick={prev}>
                        <svg
                            width="75"
                            height="50"
                            viewBox="0 0 50 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M-0.000164032 12.4993C-0.000464032 12.3246 0.0687362 12.157 0.192436 12.0333L12.0603 0.184753C12.3222 -0.0678466 12.7396 -0.0605456 12.9926 0.200954C13.2394 0.456054 13.2394 0.860454 12.9926 1.11545L1.59153 12.4993L12.9926 23.8817C13.2456 24.1432 13.2383 24.5599 12.9765 24.8125C12.7209 25.0589 12.3159 25.0589 12.0603 24.8125L0.192436 12.964C0.0691362 12.8407 -6.4032e-05 12.6736 -0.000164032 12.4993Z" />
                            <path d="M0 12.5673C0 12.2059 0.466398 11.9129 1.0417 11.9129L48.9583 11.9129C49.5336 11.913 50 12.2059 50 12.5673C50 12.9287 49.5336 13.2217 48.9583 13.2217L1.0416 13.2217C0.466399 13.2217 0 12.9287 0 12.5673Z" />
                        </svg>
                    </div>
                    <div className="arrow-next" onClick={next}>
                        <svg
                            width="75"
                            height="50"
                            viewBox="0 0 50 25"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M50.0002 12.5007C50.0005 12.6754 49.9313 12.843 49.8076 12.9667L37.9397 24.8152C37.6778 25.0678 37.2604 25.0605 37.0074 24.799C36.7606 24.5439 36.7606 24.1395 37.0074 23.8845L48.4085 12.5007L37.0074 1.11824C36.7544 0.856768 36.7617 0.440031 37.0235 0.187449C37.2791 -0.0589638 37.6841 -0.0589638 37.9397 0.187449L49.8076 12.036C49.9309 12.1593 50.0001 12.3264 50.0002 12.5007Z" />
                            <path d="M50 12.4328C50 12.7942 49.5336 13.0872 48.9583 13.0872L1.0417 13.0872C0.466406 13.0871 0 12.7942 0 12.4328C0 12.0714 0.466406 11.7784 1.0417 11.7784L48.9584 11.7784C49.5336 11.7784 50 12.0714 50 12.4328Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventSlider;
