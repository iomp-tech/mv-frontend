import React from "react";

const CabinetError = ({message, removeError}) => {
    setTimeout(() => {
        removeError();
    }, 5000);

    return (
        <div className="cabinet-error-wrapper" onClick={removeError}>
            <p className="cabinet-error">{message}</p>

            <svg
                width="25"
                height="25"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="2.70711"
                    y1="1.29289"
                    x2="38.0624"
                    y2="36.6482"
                    stroke="#C6C6C6"
                    strokeWidth="2"
                />
                <line
                    x1="1.29289"
                    y1="36.6482"
                    x2="36.6482"
                    y2="1.2929"
                    stroke="#C6C6C6"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

export default CabinetError;
