import React from "react";

import {PRIVACY_POLICY} from "../../api";

const RenderCheckboxPolycy = ({
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
                className={`shop-page-main2__checkbox ${
                    touched && error ? "checkbox_error" : "checkbox"
                }`}
                id={id}
            />
            <label
                className={`shop-page-main2__label ${
                    touched && error ? "checkbox-label_error" : "checkbox-label"
                }`}
                htmlFor={id}
            >
                <span>
                    Я согласен с условиями обработки&nbsp;
                    <a
                        href={PRIVACY_POLICY}
                        target="_blank"
                        className={`checkbox-label__link ${
                            touched && error ? "checkbox-label__link_error" : ""
                        }`}
                    >
                        персональных данных
                    </a>
                </span>
            </label>
        </>
    );
};

export default RenderCheckboxPolycy;
