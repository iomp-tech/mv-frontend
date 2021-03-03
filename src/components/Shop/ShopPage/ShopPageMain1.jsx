import React from "react";

const ShopPageMain1 = ({type, title, description, btnText, size}) => {
    return (
        <section className="shop-page-main1">
            <div className="container">
                <div className="shop-page-main1-wrapper">
                    <h1
                        className={`shop-page-main1__title ${size}`}
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}
                    ></h1>
                    <p className={`shop-page-main1__description ${size}`}>
                        {description}
                    </p>

                    <a
                        className={`btn-bold_color shop-page-main1__btn ${size}`}
                    >
                        {btnText}
                    </a>

                    <div className="circle-wrapper main-circle-wrapper">
                        <div className="circle-regular main-circle1"></div>
                        <div
                            className={`circle-bold ${size} main-circle2`}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageMain1;
