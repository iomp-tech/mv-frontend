import React from "react";

const ServicesBlock = ({title, description, index, type}) => {
    return (
        <div className={`services-block services-block_${type}`}>
            <span className="services-block__number">{index}.</span>
            <h3 className="services-block__title">{title}</h3>
            <p className="services-block__description">{description}</p>
        </div>
    );
};

export default ServicesBlock;
