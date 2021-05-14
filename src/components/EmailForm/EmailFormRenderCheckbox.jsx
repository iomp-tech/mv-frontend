import React from "react";

import {Link} from "react-router-dom";

const EmailFormRenderCheckbox = ({input, type, id, meta: {touched, error}}) => {
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
                className={`checkbox-label_white email-form__label ${
                    touched && error ? "checkbox-label_white_error" : ""
                }`}
                htmlFor={id}
            >
                Я согласен с условиями обработки&nbsp;
                <Link
                    to="/privacy"
                    target="_blank"
                    className={`checkbox-label_white__link ${
                        touched && error
                            ? "checkbox-label_white__link_error"
                            : ""
                    }`}
                >
                    персональных данных
                </Link>
            </label>
        </>
    );
};

export default EmailFormRenderCheckbox;
