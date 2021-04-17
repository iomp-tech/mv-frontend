import React from "react";

const RenderSelect = ({
    input,
    label,
    choise,
    meta: {touched, error},
    color,
}) => {
    return (
        <div className="select">
            {label && <span className="select__label">{label}</span>}
            <select
                {...input}
                className={`select__select ${
                    touched && error ? "select__select__error" : ""
                }`}
                style={{color: color}}
            >
                {choise.map((item, index) => (
                    <option
                        value={item}
                        className="select__option"
                        key={`select__option-${index}`}
                    >
                        {item}
                    </option>
                ))}
            </select>
            <span className={`select__span`}></span>
        </div>
    );
};

export default RenderSelect;
