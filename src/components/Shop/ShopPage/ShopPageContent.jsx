import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const ShopPageContent = ({
    subtitle,
    title,
    description,
    image,
}) => {
    return (
        <section className={`shop-page-content`}>
            <div className="container">
                <div className="shop-page-content-wrapper">
                    <div className="shop-page-content-text">
                        <span
                            className={`shop-page-content-text__subtitle`}
                            dangerouslySetInnerHTML={{
                                __html: subtitle,
                            }}></span>

                        <h1
                            className={`shop-page-content-text__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}></h1>
                        <p
                            className={`shop-page-content-text__description`}
                            dangerouslySetInnerHTML={{__html: description}}></p>
                    </div>

                    <div className="shop-page-content-cover">
                        <img
                            src={image}
                            alt=""
                            className="shop-page-content-cover__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageContent;
