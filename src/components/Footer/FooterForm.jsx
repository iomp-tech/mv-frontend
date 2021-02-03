import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";

import FooterFormRenderCheckbox from "./FooterFormRenderCheckbox";
import FooterFormRenderInput from "./FooterFormRenderInput";

let FooterForm = React.memo(({handleSubmit, stateForm, size}) => {
    return (
        <form className="footer-email-form" onSubmit={handleSubmit}>
            <h4 className={`footer-email-form__title ${size}`}>
                Подпишитесь на рассылку IOMP
            </h4>
            {stateForm ? (
                <p className={`footer-email-form__title ${size}`}>
                    Спасибо, вы успешно подписаны
                </p>
            ) : (
                <>
                    <Field
                        component={FooterFormRenderInput}
                        type="email"
                        name="email"
                        size={size}
                        placeholder="Email"
                    />
                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <Field
                            component={FooterFormRenderCheckbox}
                            name="confirmation"
                            type="checkbox"
                            size={size}
                            id="footer-email-form__checkbox"
                        />
                    </div>
                </>
            )}
        </form>
    );
});

FooterForm = reduxForm({
    form: "emailFormSmall",
    initialValues: {confirmation: true},
    validate,
})(FooterForm);

export default FooterForm;
