import React from "react";

const EmailFormRenderCheckbox = ({
    size,
    input,
    label,
	type,
	id,
    meta: {touched, error},
}) => {
    return (
        <>
            <input
                {...input}
                type={type}
                id={id}
                className={`checkbox_white email-form__checkbox ${
                    touched && error ? "checkbox_white_error" : ""
                }`}
            />
            <label
                className={`checkbox-label_white ${size} email-form__label ${
                    touched && error ? "checkbox-label_white_error" : ""
                }`}
                htmlFor={id}
            >
                {label}
            </label>
        </>
    );
};

export default EmailFormRenderCheckbox;
