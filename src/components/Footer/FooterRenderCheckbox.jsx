import React from "react";

import {PRIVACY_POLICY} from "./../../api";

const FooterRenderCheckbox = ({
    size,
    input,
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
                className={`checkbox_white ${size} footer-email-form__checkbox ${
                    touched && error ? "checkbox_white_error" : ""
                }`}
            />
            <label
                className={`checkbox-label_white ${size} footer-email-form__label ${
                    touched && error ? "checkbox-label_white_error" : ""
                }`}
                htmlFor={id}
            >
                Я согласен с условиями обработки&nbsp;
                <a
                    href={PRIVACY_POLICY}
                    target="_blank"
                    className={`checkbox-label_white__link ${
                        touched && error
                            ? "checkbox-label_white__link_error"
                            : ""
                    }`}
                >
                    персональных данных
                </a>
            </label>
        </>
    );
};

export default FooterRenderCheckbox;
