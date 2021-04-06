import React from "react";

import { Field, reduxForm } from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageFormCompositionProduct = ({size, handleSubmit}) => {
    return (
        <form
            className={`shop-page-composition-product-form ${size}`}
            onSubmit={handleSubmit}
        >
            <h3 className={`shop-page-composition-product-form__title ${size}`}>
                Записаться
            </h3>
            <div className="shop-page-composition-product-form-middle">
                <div
                    className={`shop-page-composition-product-form-block-wrapper ${size}`}
                >
                    <div className="input shop-page-composition-product-form-input-wrapper">
                        <div className="shop-page-composition-product-form-input">
                            <Field
                                component={RenderInput}
                                type="email"
                                name="email"
                                label="Email"
                                className="shop-page-composition-product-form-input__field"
                                size={size}
                            />
                        </div>
                    </div>
                    <button
                        className={`btn-bold_color shop-page-composition-product-form__btn ${size}`}
                    >
                        Записаться
                    </button>
                </div>
            </div>
            <div className="checkbox-wrapper shop-page-composition-product-checkbox">
                {/* shop-page-composition-product__checkbox */}
                <Field
                    component={RenderCheckboxPolycy}
                    type="checkbox"
                    name="confirmation"
                    id="shop-page-composition-product__checkbox-1"
                    size={size}
                />
            </div>
        </form>
    );
};

ShopPageFormCompositionProduct = reduxForm({
    form: "shop_page_composition_product",
    validate,
})(ShopPageFormCompositionProduct);

export default ShopPageFormCompositionProduct;
