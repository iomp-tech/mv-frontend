import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

import OwlCarousel from "react-owl-carousel2";
import "../../../assets/owl-carousel/owl.carousel.css";

const ShopPageSliderText = ({to, title, tabs, btnText, size}) => {
    const [stateListTabs, setStateListTabs] = React.useState([]);
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

    const onClickSliderTextTabsItem = (items, index) => {
        setStateListTabs(items);
        setStateListTabsIndex(index);
        setStateAnimateTabs(true);

        setTimeout(() => {
            setStateAnimateTabs(false);
        }, 400);

        nextSlide(index);
    };

	const options = {
        autoWidth: true,
        margin: 50,
        responsive: {
            1000: {
                margin: 100,
            },
        },
    };

	const nextSlide = (index) => {
        sliderRef.current.goTo(index);
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
                    <OwlCarousel ref={sliderRef} options={options}>
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
                                        onClickSliderTextTabsItem(
                                            tab.items,
                                            index
                                        )
                                    }
                                >
                                    {tab.title}
                                </h3>
                            </div>
                        ))}
                    </OwlCarousel>
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
                                {stateListTabs.length
                                    ? stateListTabs.map((li, index) => (
                                          <li
                                              key={`slider-text-li-${index}`}
                                              className={`shop-page-slider-text-list__li ${size}`}
                                          >
                                              <span>{li.text}</span>
                                          </li>
                                      ))
                                    : tabs[0].items.map((li, index) => (
                                          <li
                                              key={`slider-text-li-${index}`}
                                              className={`shop-page-slider-text-list__li ${size}`}
                                          >
                                              <span>{li.text}</span>
                                          </li>
                                      ))}
                            </ul>
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
