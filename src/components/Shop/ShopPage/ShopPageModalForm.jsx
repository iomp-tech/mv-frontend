import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageModalForm = ({handleSubmit}) => {
    return (
        <form className={`shop-page-modal-form`} onSubmit={handleSubmit}>
            <div className="shop-page-modal-form-middle">
                <div className={`shop-page-modal-form-block-wrapper`}>
                    <div className="input shop-page-modal-form-input-wrapper">
                        <div className="shop-page-modal-form-input">
                            <Field
                                component={RenderInput}
                                type="email"
                                name="email"
                                label="Email"
                            />
                        </div>
                    </div>
                    <button
                        className={`btn-bold_color shop-page-modal-form__btn`}
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
                />
            </div>
        </form>
    );
};

ShopPageModalForm = reduxForm({
    form: "shop_page_modal_form",
    validate,
})(ShopPageModalForm);

export default ShopPageModalForm;
