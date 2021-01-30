import React from "react";

const AboutBlock = ({title, subtitle, color, bgColor, size}) => {
    return (
        <div
            className={`about-block ${size}`}
            style={{backgroundColor: bgColor !== "#fff" ? bgColor : ""}}
        >
            <h3 className={`about-block__title ${size}`}>
                {title}
            </h3>
            <p
                className={`about-block__subtitle ${size}`}
                style={{color: color}}
            >
                {subtitle}
            </p>
        </div>
    );
};

export default AboutBlock;
