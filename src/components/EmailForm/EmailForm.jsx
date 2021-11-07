import React from "react";
import {Field, reduxForm} from "redux-form";

import validate from "./validate";
import EmailFormRenderInputButton from "./EmailFormRenderInputButton";
import EmailFormRenderCheckbox from "./EmailFormRenderCheckbox";

let EmailForm = React.memo(({handleSubmit, isLoaded}) => {
    return (
        <>
            {isLoaded ? (
                <form onSubmit={handleSubmit} className="email-form">
                    <div className="container">
                        <div className={`email-form-wrapper`}>
                            <div className={`email-form-left`}>
                                <h2 className={`email-form__title`}>
                                    Хотите получать лучшие статьи от
                                    MasterVision?
                                </h2>
                                <p className={`email-form__subtitle`}>
                                    Подпишитесь на рассылку MasterVision
                                </p>
                            </div>
                            <div className={`email-form-right`}>
                                <div className="email-form-input">
                                    <Field
                                        component={EmailFormRenderInputButton}
                                        type="email"
                                        name="email"
                                        label="Email"
                                    />
                                </div>

                                <div className="checkbox-wrapper email-form-checkbox">
                                    <Field
                                        component={EmailFormRenderCheckbox}
                                        type="checkbox"
                                        name="confirmation"
                                        id="email-form__checkbox"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : null}
        </>
    );
});

EmailForm = reduxForm({
    form: "email_form",
    validate,
})(EmailForm);

export default EmailForm;
