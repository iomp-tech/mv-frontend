import React from "react";

const AboutBlock = ({title, subtitle, color}) => {
    return (
        <div className={`about-block`}>
            <h3 className={`about-block__title`}>{title}</h3>
            <p className={`about-block__subtitle`} style={{color: color}}>
                {subtitle}
            </p>
        </div>
    );
};

export default AboutBlock;
