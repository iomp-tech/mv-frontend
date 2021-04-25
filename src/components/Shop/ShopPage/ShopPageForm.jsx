import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageForm = ({handleSubmit}) => {
    return (
        <form className={`shop-page-form`} onSubmit={handleSubmit}>
            <div className="shop-page-form-middle">
                <div className={`shop-page-form-block-wrapper`}>
                    <div className="input shop-page-form-input-wrapper">
                        <div className="shop-page-form-input">
                            <Field
                                component={RenderInput}
                                type="email"
                                name="email"
                                label="Email"
                            />
                        </div>
                    </div>
                    <button
                        className={`btn-bold_color shop-page-form__btn`}
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
                    id={`shop-page__checkbox-${Math.floor(Math.random() * 10000000)}`}
                />
            </div>
        </form>
    );
};

ShopPageForm = reduxForm({
    form: "shop_page_form",
    validate,
})(ShopPageForm);

export default ShopPageForm;
