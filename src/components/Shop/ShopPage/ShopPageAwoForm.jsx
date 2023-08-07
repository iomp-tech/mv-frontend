import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageAwoForm = ({
    size,
    id_awo,
    action,
    formId,
    formVc,
    invalid,
    submitting,
    pristine,
    initialize,
}) => {
    React.useEffect(() => {
        initialize({
            required_fields: {email: 1},
            Contact: {id_newsletter: id_awo, id_advertising_channel_page: 0},
            formId,
            formVc,
            _aid: "",
            _vcaid: "",
        });
    }, []);

    return (
        <form
            action={action}
            className={`shop-page-awo-form ${size}`}
            encType="application/x-www-form-urlencoded"
            acceptCharset="UTF-8"
            method="POST"
        >
            <div className="shop-page-awo-form-middle">
                <div className={`shop-page-awo-form-block-wrapper ${size}`}>
                    <div className="input shop-page-awo-form-input-wrapper">
                        <div className="shop-page-awo-form-input">
                            <Field
                                component={RenderInput}
                                type="hidden"
                                name="required_fields[email]"
                            />

                            <Field
                                component={RenderInput}
                                type="email"
                                size={size}
                                name="Contact[email]"
                                label="Email"
                            />

                            <div style={{display: "none"}}>
                                <div
                                    id="formTypeSpecificVars-1"
                                    style={{display: "none"}}
                                >
                                    <Field
                                        component={RenderInput}
                                        type="hidden"
                                        name="Contact[id_newsletter]"
                                    />
                                </div>
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="Contact[id_advertising_channel_page]"
                                />
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="formId"
                                />
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="formVc"
                                />
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="_aid"
                                />
                                <Field
                                    component={RenderInput}
                                    type="hidden"
                                    name="_vcaid"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`btn-bold_color shop-page-awo-form__btn ${
                            !pristine && !submitting && !invalid
                                ? ""
                                : "btn-bold_color_disabled"
                        }`}
                        disabled={invalid || submitting || pristine}
                    >
                        Записаться
                    </button>
                </div>
            </div>
            <div className="checkbox-wrapper shop-page-checkbox">
                <Field
                    component={RenderCheckboxPolycy}
                    type="checkbox"
                    name="confirmation"
                    id={`shop-page__checkbox-${Math.floor(
                        Math.random() * 10000000
                    )}`}
                    size={size}
                />
            </div>
        </form>
    );
};

ShopPageAwoForm = reduxForm({
    form: "shop_page_form",
    validate,
})(ShopPageAwoForm);

export default ShopPageAwoForm;
