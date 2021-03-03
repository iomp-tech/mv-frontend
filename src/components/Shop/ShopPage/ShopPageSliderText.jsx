import React from "react";

import OwlCarousel from "react-owl-carousel2";
import "../../../assets/owl-carousel/owl.carousel.css";

const ShopPageSliderText = ({title, tabs, btnText, size}) => {
    const [stateListTabs, setStateListTabs] = React.useState([]);
    const [stateListTabsIndex, setStateListTabsIndex] = React.useState(0);
    const [stateAnimateTabs, setStateAnimateTabs] = React.useState(false);

    const onClickSliderTextTabsItem = (items, index) => {
        setStateListTabs(items);
        setStateListTabsIndex(index);
        setStateAnimateTabs(true);

        setTimeout(() => {
            setStateAnimateTabs(false);
        }, 400);
    };

    const options = {
        items: 3,
        loop: false,
        margin: 50,
        autoWidth: true,
        responsive: {
            1000: {
                margin: 120,
            },
        },
    };

    return (
        <section className="shop-page-slider-text">
            <div className="container">
                <div className="shop-page-slider-text-wrapper">
                    <h2 className="title shop-page-slider-text__title">
                        {title}
                    </h2>
                    <OwlCarousel options={options}>
                        {tabs.map((tab, index) => (
                            <div className="shop-page-slider-text-tabs-item">
                                <h3
                                    key={`slider-text-tab-${index}`}
                                    className={`shop-page-slider-text-tabs-item__title ${
                                        index === stateListTabsIndex
                                            ? "active"
                                            : ""
                                    }`}
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
                    <div className="shop-page-slider-text-list">
                        {stateListTabs.length ? (
                            <ul
                                className={`shop-page-slider-text-list-ul ${
                                    stateAnimateTabs ? "active" : ""
                                }`}
                            >
                                {stateListTabs.map((li, index) => (
                                    <li
                                        key={`slider-text-li-${index}`}
                                        className="shop-page-slider-text-list__li"
                                    >
                                        <span>{li.text}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul
                                className={`shop-page-slider-text-list-ul ${
                                    stateAnimateTabs ? "active" : ""
                                }`}
                            >
                                {tabs[0].items.map((li, index) => (
                                    <li
                                        key={`slider-text-li-${index}`}
                                        className="shop-page-slider-text-list__li"
                                    >
                                        <span>{li.text}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="shop-page-slider-text-btn">
                        <a
                            className={`btn-bold_color shop-page-slider-text__btn ${size}`}
                        >
                            {btnText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageSliderText;