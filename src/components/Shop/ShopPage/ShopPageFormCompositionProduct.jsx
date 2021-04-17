import React from "react";

import { Field, reduxForm } from "redux-form";

import validate from "./validate";

import {RenderCheckboxPolycy, RenderInput} from "../../";

let ShopPageFormCompositionProduct = ({handleSubmit}) => {
    return (
        <form
            className={`shop-page-composition-product-form`}
            onSubmit={handleSubmit}
        >
            <div className="shop-page-composition-product-form-middle">
                <div
                    className={`shop-page-composition-product-form-block-wrapper`}
                >
                    <div className="input shop-page-composition-product-form-input-wrapper">
                        <div className="shop-page-composition-product-form-input">
                            <Field
                                component={RenderInput}
                                type="email"
                                name="email"
                                label="Email"
                                className="shop-page-composition-product-form-input__field"
                            />
                        </div>
                    </div>
                    <button
                        className={`btn-bold_color shop-page-composition-product-form__btn`}
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
