import React from "react";

const CabinetSelectRender = ({input, label, choise, size}) => {
    return (
        <div className="cabinet-select">
            <span className="cabinet-select__label">{label}</span>
            <select {...input} className="cabinet-select__select">
                {choise.map((item, index) => (
                    <option
                        value={item}
                        className="cabinet-select__option"
                        key={`cabinet-select__option-${index}`}
                    >
                        {item}
                    </option>
                ))}
            </select>
            <span className={`cabinet-select__span ${size}`}></span>
        </div>
    );
};

export default CabinetSelectRender;
