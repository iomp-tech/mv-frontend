import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";
import FooterRenderInputButton from "./FooterRenderInputButton";
import FooterRenderCheckbox from "./FooterRenderCheckbox";

let FooterForm = React.memo(
    ({handleSubmit}) => {
        return (
            <form
                onSubmit={handleSubmit}
                className={`footer-email-form`}
            >
                <h4 className={`footer-email-form__title`}>
                    Подпишитесь на рассылку Института
                </h4>
                <>
                    <div className="footer-email-form-input">
                        <Field
                            component={FooterRenderInputButton}
                            type="email"
                            name="email"
                            label="Email"
                        />
                    </div>

                    <div className="checkbox-wrapper footer-email-form-checkbox">
                        <Field
                            component={FooterRenderCheckbox}
                            type="checkbox"
                            name="confirmation"
                            id="footer-email-form__checkbox"
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
