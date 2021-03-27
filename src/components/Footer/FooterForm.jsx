import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";
import FooterRenderInputButton from "./FooterRenderInputButton";
import FooterRenderCheckbox from "./FooterRenderCheckbox";

let FooterForm = React.memo(
    ({size, handleSubmit, initialize}) => {
        React.useEffect(() => {
            initialize({
                confirmation: true,
            });
        }, []);

        return (
            <form
                onSubmit={handleSubmit}
                className={`footer-email-form ${size}`}
            >
                <h4 className={`footer-email-form__title ${size}`}>
                    Подпишитесь на рассылку Института
                </h4>
                <>
                    <div className="footer-email-form-input">
                        <Field
                            component={FooterRenderInputButton}
                            type="email"
                            name="email"
                            label="Email"
                            size={size}
                        />
                    </div>

                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <Field
                            component={FooterRenderCheckbox}
                            type="checkbox"
                            name="confirmation"
                            id="footer-email-form__checkbox"
                            label="Я согласен с условиями обработки персональных данных"
                            size={size}
                        />
                    </div>
                </>
            </form>
        );
    }
);

FooterForm = reduxForm({
    form: "footer_form",
    validate,
})(FooterForm);

export default FooterForm;
