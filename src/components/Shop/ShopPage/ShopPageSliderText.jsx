import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

import Slider from "react-slick";

import "../../../assets/slick/slick.css";
import "../../../assets/slick/slick-theme.css";

const ShopPageSliderText = ({to, title, tabs, btnText, size}) => {
    const [stateListTabsIndex, setStateListTabsIndex] = React.useState(0);
    const [stateAnimateTabs, setStateAnimateTabs] = React.useState(false);
    const [heightList, setHeightList] = React.useState(950);

    React.useEffect(() => {
        setHeightList(
            document.querySelector(".shop-page-slider-text-list").clientHeight +
                50
        );
    }, [stateListTabsIndex]);

    const sliderRef = React.useRef();

    const onClickSliderTextTabsItem = (index) => {
        setStateListTabsIndex(index);
        setStateAnimateTabs(true);

        setTimeout(() => {
            setStateAnimateTabs(false);
        }, 400);

        nextSlide(index);
    };

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerMode: true,
                },
            },
        ],
    };

    const nextSlide = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    return (
        <section className="shop-page-slider-text">
            <div className="container">
                <div className="shop-page-slider-text-wrapper">
                    <h2
                        className={`title ${size} shop-page-slider-text__title`}
                    >
                        {title}
                    </h2>
                    <Slider ref={sliderRef} {...settings}>
                        {tabs.map((tab, index) => (
                            <div
                                key={`shop-page-slider-text-tabs-item-${index}`}
                                className="shop-page-slider-text-tabs-item"
                            >
                                <h3
                                    className={`shop-page-slider-text-tabs-item__title ${
                                        index === stateListTabsIndex
                                            ? "active"
                                            : ""
                                    } ${size}`}
                                    onClick={() =>
                                        onClickSliderTextTabsItem(index)
                                    }
                                >
                                    {tab.title}
                                </h3>
                            </div>
                        ))}
                    </Slider>
                    <div
                        className="shop-page-slider-text-list-wrapper"
                        style={{height: heightList}}
                    >
                        <div
                            className={`shop-page-slider-text-list ${
                                stateAnimateTabs ? "active" : ""
                            } ${size}`}
                        >
                            <ul
                                className={`shop-page-slider-text-list-ul ${size}`}
                            >
                                {tabs[stateListTabsIndex].items &&
                                    tabs[stateListTabsIndex].items.map(
                                        (li, index) => (
                                            <li
                                                key={`slider-text-li-${index}`}
                                                className={`shop-page-slider-text-list__li ${size}`}
                                            >
                                                <span>{li.text}</span>
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        <div className="circle-wrapper shop-page-slider-text-circle-wrapper">
                            <div
                                className={`circle-bold ${size} shop-page-slider-text-circle1`}
                            ></div>
                            <div
                                className={`circle-regular ${size} shop-page-slider-text-circle2`}
                            ></div>
                        </div>
                    </div>
                    <div className="shop-page-slider-text-btn">
                        <Link
                            to={to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                        >
                            <button
                                className={`btn-bold_color shop-page-slider-text__btn ${size}`}
                            >
                                {btnText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageSliderText;
