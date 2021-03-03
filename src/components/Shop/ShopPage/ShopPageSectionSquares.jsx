import React from "react";

import {ServicesBlock} from "../../";

const ShopPageSectionSquares = ({title, squares, size}) => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-wrapper">
                    <div
                        className={`circle-bold ${size} services-circle1`}
                    ></div>
                    <div
                        className={`circle-bold ${size} services-circle2`}
                    ></div>

                    <h2 className={`title ${size} services__title`}>{title}</h2>

                    <div className="services-block-wrapper">
                        {squares.map((obj, index) => (
                            <ServicesBlock
                                key={`${obj.title}_${index}`}
                                size={size}
                                index={++index}
                                {...obj}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPageSectionSquares;
