import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const ShopPageMain1Image = ({
    to,
    subtitle,
    title,
    description,
    btnText,
    image,
}) => {
    return (
        <section className={`shop-page-main1-image`} id="shop-page-main1-image">
            <div className="container">
                <div className="shop-page-main1-image-wrapper">
                    <div className="shop-page-main1-image-text">
                        <p
                            className={`shop-page-main1-image-text__subtitle`}
                        >
                            {subtitle}
                        </p>
                        <h1
                            className={`shop-page-main1-image-text__title`}
                            dangerouslySetInnerHTML={{
                                __html: title,
                            }}
                        ></h1>
                        <p
                            className={`shop-page-main1-image-text__description`}
                        >
                            {description}
                        </p>
                        <Link
                            to={to}
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={1000}
                        >
                            <button
                                className={`btn-bold_color shop-page-main1-image-text__btn`}
                            >
                                {btnText}
                            </button>
                        </Link>
                        <div className="circle-wrapper main-circle-wrapper">
                            <div className="circle-regular main-circle1"></div>
                            <div
                                className={`circle-bold main-circle2`}
                            ></div>
                        </div>
                    </div>
                    <div className="shop-page-main1-image-cover">
                        <img
                            src={image}
                            alt=""
                            className="shop-page-main1-image-cover__image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain1Image;
